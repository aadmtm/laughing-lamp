from pathlib import Path
import zipfile, textwrap, os, json, math

out = Path("/mnt/data/petualangan_matematika")
out.mkdir(exist_ok=True)

html = r'''<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Petualangan Matematika</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@500;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <main class="app-shell">
    <section class="hero">
      <div class="sky-decor">
        <span class="num n1">2</span>
        <span class="num n2">3</span>
        <span class="num n3">+</span>
        <span class="num n4">8</span>
        <span class="num n5">5</span>
      </div>

      <div class="cloud cloud-a"></div>
      <div class="cloud cloud-b"></div>
      <div class="cloud cloud-c"></div>

      <div class="castle castle-left">
        <div class="tower">
          <div class="roof"></div>
          <div class="window"></div>
        </div>
      </div>

      <div class="hill h1"></div>
      <div class="hill h2"></div>
      <div class="hill h3"></div>

      <div class="path"></div>

      <div class="board">
        <div>8 - 3</div>
        <div>= 5</div>
      </div>

      <div class="signs">
        <div class="sign blue">Belajar</div>
        <div class="sign green">Latihan</div>
        <div class="sign red">Seru!</div>
      </div>

      <div class="characters">
        <div class="kid boy">
          <div class="head">
            <div class="hair"></div>
            <div class="eye e1"></div><div class="eye e2"></div>
            <div class="mouth"></div>
          </div>
          <div class="body"></div>
          <div class="book">2+2</div>
          <div class="leg l1"></div><div class="leg l2"></div>
        </div>

        <div class="dino">
          <div class="horns">▲ ▲ ▲</div>
          <div class="dino-eye de1"></div><div class="dino-eye de2"></div>
          <div class="dino-mouth"></div>
          <div class="arm da1"></div><div class="arm da2"></div>
          <div class="foot df1"></div><div class="foot df2"></div>
        </div>

        <div class="kid girl">
          <div class="head">
            <div class="hair girlhair"></div>
            <div class="eye e1"></div><div class="eye e2"></div>
            <div class="mouth"></div>
            <div class="flower">✦</div>
          </div>
          <div class="body girlbody"></div>
          <div class="glass">⌕</div>
          <div class="leg l1"></div><div class="leg l2"></div>
        </div>
      </div>
    </section>

    <section class="home-card" id="homeScreen">
      <div class="spark">✦</div>
      <h1>Petualangan<br>Matematika<span>!</span></h1>
      <p class="subtitle">Belajar seru untuk Kelas 2 SD</p>

      <div class="stats-card">
        <div class="stat"><div class="icon mint">✓</div><strong>20 soal</strong></div>
        <div class="divider"></div>
        <div class="stat"><div class="icon yellow">▥</div><strong>2 level</strong></div>
        <div class="divider"></div>
        <div class="stat"><div class="icon pink">⏱</div><strong>10 detik</strong></div>
      </div>

      <button class="primary-btn" id="startBtn"><span>▶</span> Mulai Bermain</button>

      <div class="best-score">🏆 Skor terbaik: <b id="bestScore">0</b></div>
      <p class="note">Setiap jawaban benar bernilai <b>+5 poin.</b></p>
    </section>

    <section class="game-card hidden" id="gameScreen">
      <div class="game-top">
        <div>
          <small>Soal <span id="questionIndex">1</span>/20</small>
          <div class="progress"><div id="progressBar"></div></div>
        </div>
        <div class="score-box">⭐ <span id="score">0</span></div>
      </div>

      <div class="timer-wrap">
        <div class="timer-label">Waktu</div>
        <div class="timer" id="timer">10</div>
      </div>

      <div class="question-card">
        <div class="level-badge" id="levelBadge">Level 1</div>
        <h2 id="questionText">8 - 3 = ?</h2>
        <div class="answers" id="answers"></div>
        <div class="feedback" id="feedback"></div>
      </div>

      <button class="secondary-btn" id="quitBtn">Kembali ke Menu</button>
    </section>

    <section class="game-card hidden" id="resultScreen">
      <div class="result-emoji">🏆</div>
      <h2>Permainan Selesai!</h2>
      <p>Kamu mendapatkan skor</p>
      <div class="final-score" id="finalScore">0</div>
      <p class="result-message" id="resultMessage"></p>
      <button class="primary-btn" id="playAgainBtn">Main Lagi</button>
      <button class="secondary-btn" id="homeBtn">Kembali ke Menu</button>
    </section>

    <footer>petualangan-matematika</footer>
  </main>

  <script src="script.js"></script>
</body>
</html>
'''

css = r'''*{box-sizing:border-box}
:root{
  --ink:#172330;
  --cream:#fffaf3;
  --teal:#35bea6;
  --blue:#278ecc;
  --darkblue:#167f9d;
}
body{
  margin:0;
  font-family:"Nunito",system-ui,sans-serif;
  color:var(--ink);
  background:#d8f5f8;
  display:flex;
  justify-content:center;
}
.app-shell{
  width:min(100%,740px);
  min-height:100vh;
  overflow:hidden;
  background:linear-gradient(#bfeef6 0 45%, #fff9f0 45% 100%);
  box-shadow:0 0 35px rgba(0,0,0,.14);
}
.hero{
  height:700px;
  position:relative;
  overflow:hidden;
  background:linear-gradient(#bcecf4 0%,#dff8fa 62%,#9bdc7b 63%,#6fca63 100%);
}
.sky-decor .num{
  position:absolute;
  font-size:78px;
  line-height:1;
  font-weight:900;
  filter:drop-shadow(0 7px 3px rgba(0,0,0,.13));
  z-index:4;
}
.n1{left:8%;top:28px;color:#84c43d;transform:rotate(-16deg)}
.n2{left:30%;top:55px;color:#f28927}
.n3{left:46%;top:93px;color:#9957bd}
.n4{left:62%;top:40px;color:#4a9ed3}
.n5{right:10%;top:110px;color:#f4bd36;transform:rotate(12deg)}
.cloud{
  position:absolute;width:100px;height:35px;background:#fff9;
  border-radius:40px;filter:blur(.2px)
}
.cloud:before,.cloud:after{content:"";position:absolute;background:inherit;border-radius:50%}
.cloud:before{width:42px;height:42px;left:15px;top:-20px}
.cloud:after{width:52px;height:52px;right:12px;top:-27px}
.cloud-a{left:18%;top:10px}.cloud-b{right:10%;top:75px}.cloud-c{left:38%;top:190px}
.hill{position:absolute;border-radius:50%;background:#7bd16a}
.h1{width:330px;height:160px;left:-80px;bottom:95px}
.h2{width:450px;height:190px;right:-120px;bottom:110px;background:#88d96e}
.h3{width:300px;height:125px;left:220px;bottom:145px;background:#97df78}
.path{
  position:absolute;left:50%;bottom:-30px;transform:translateX(-50%);
  width:250px;height:420px;background:#edd8ad;clip-path:polygon(44% 0,60% 0,90% 100%,0 100%);
}
.castle-left{position:absolute;left:18px;bottom:255px}
.tower{width:70px;height:150px;background:#e9dfc0;border-radius:10px 10px 0 0;position:relative}
.roof{position:absolute;top:-58px;left:-10px;width:90px;height:65px;background:#ef8756;clip-path:polygon(50% 0,100% 100%,0 100%)}
.window{position:absolute;width:17px;height:30px;background:#4f6d74;left:27px;top:55px;border-radius:10px 10px 0 0}
.board{
  position:absolute;left:7px;bottom:115px;width:118px;height:145px;background:#47735c;border:8px solid #b77e3f;border-radius:8px;
  color:white;font-size:31px;font-weight:900;padding:30px 9px;transform:rotate(-7deg);z-index:6;
}
.signs{position:absolute;right:6px;bottom:185px;z-index:7}
.sign{width:120px;padding:10px 12px;margin:8px 0;color:#fff;font-weight:900;font-size:22px;text-align:center;border-radius:8px;transform:skew(-8deg);box-shadow:0 3px 0 #0002}
.sign.blue{background:#2c8ebf}.sign.green{background:#80b744}.sign.red{background:#ef5f4e}
.characters{position:absolute;left:50%;bottom:40px;transform:translateX(-50%);width:500px;height:350px;z-index:8}
.kid,.dino{position:absolute}
.kid .head{
  width:120px;height:118px;border-radius:48% 48% 45% 45%;background:#f3b675;position:absolute;
  box-shadow:inset 0 -5px 0 #e79d5f;
}
.hair{position:absolute;left:5px;top:-20px;width:112px;height:45px;background:#3c2c26;border-radius:55% 50% 45% 40%;transform:rotate(-4deg)}
.hair:before,.hair:after{content:"";position:absolute;background:#3c2c26;border-radius:50%}
.hair:before{width:35px;height:45px;left:10px;top:-15px;transform:rotate(-35deg)}
.hair:after{width:45px;height:42px;right:8px;top:-16px;transform:rotate(25deg)}
.eye{position:absolute;width:14px;height:23px;border-radius:50%;background:#2f2925;top:48px}
.e1{left:31px}.e2{right:31px}
.eye:after{content:"";position:absolute;width:5px;height:7px;background:#fff;border-radius:50%;left:3px;top:3px}
.mouth{position:absolute;left:42px;top:78px;width:39px;height:24px;border-radius:5px 5px 22px 22px;background:#8b3a2f;border:3px solid #4d2924}
.body{position:absolute;top:105px;left:22px;width:78px;height:104px;background:#159b91;border-radius:28px}
.book{position:absolute;top:128px;left:4px;width:58px;height:72px;background:#4f87bd;color:white;font-weight:900;font-size:20px;border:4px solid #d7e0e8;border-radius:5px;display:grid;place-items:center;transform:rotate(-4deg)}
.leg{position:absolute;top:192px;width:31px;height:92px;background:#f0b770;border-radius:17px}
.leg:after{content:"";position:absolute;bottom:-18px;left:-7px;width:51px;height:25px;border-radius:18px;background:#e45f44;border:6px solid #f4eee4}
.l1{left:28px;transform:rotate(12deg)}.l2{left:76px;transform:rotate(-7deg)}
.boy{left:20px;top:45px}
.girl{right:24px;top:70px}
.girlhair{height:112px;top:-12px;background:#5b3525;border-radius:52%}
.girl .head{z-index:2}
.girlbody{background:#4d91ae}
.girl .flower{position:absolute;right:-3px;top:29px;color:#ffd146;font-size:25px}
.glass{position:absolute;right:-31px;top:92px;font-size:70px;transform:rotate(-18deg);color:#4e5c63;font-weight:800}
.dino{
  left:185px;top:125px;width:145px;height:175px;background:#63d0b2;border-radius:55% 55% 42% 42%;
  box-shadow:inset 0 -8px 0 #47b799;
}
.horns{position:absolute;top:-26px;left:10px;width:130px;color:#f6f0d5;font-size:26px;letter-spacing:5px;transform:rotate(-5deg)}
.dino-eye{position:absolute;top:58px;width:17px;height:25px;background:#253736;border-radius:50%}
.de1{left:37px}.de2{right:37px}
.dino-eye:after{content:"";position:absolute;width:6px;height:7px;background:white;border-radius:50%;left:4px;top:3px}
.dino-mouth{position:absolute;left:47px;top:96px;width:52px;height:35px;background:#2b4c46;border-radius:8px 8px 25px 25px}
.arm{position:absolute;width:28px;height:63px;background:#63d0b2;border-radius:20px;top:105px}
.da1{left:-12px;transform:rotate(28deg)}.da2{right:-12px;transform:rotate(-28deg)}
.foot{position:absolute;width:38px;height:50px;background:#63d0b2;border-radius:20px;bottom:-22px}
.df1{left:30px}.df2{right:30px}
.home-card,.game-card{
  position:relative;margin-top:-55px;border-radius:48px 48px 0 0;background:var(--cream);padding:62px 42px 48px;min-height:650px;z-index:20;text-align:center;
}
.spark{position:absolute;left:40px;top:36px;color:#28a78e;font-size:30px}
h1{font-size:62px;line-height:.93;margin:0;font-weight:900;letter-spacing:-2px}
h1 span{color:#fa6d5c}
.subtitle{color:#23a695;font-size:29px;font-weight:900;margin:38px 0 42px}
.stats-card{
  background:#fff;border-radius:28px;display:flex;align-items:center;justify-content:space-around;padding:22px 18px;
  box-shadow:0 8px 22px #7f8a9422;margin-bottom:42px;
}
.stat{display:flex;align-items:center;gap:13px;font-size:22px}
.icon{width:54px;height:54px;border-radius:15px;display:grid;place-items:center;font-size:27px}
.mint{background:#c3f1e8;color:#319f91}.yellow{background:#ffe49a;color:#b28b16}.pink{background:#ffd1cc}
.divider{width:1px;height:52px;background:#e7ded4}
.primary-btn{
  width:100%;border:0;border-radius:28px;padding:25px 20px;font:900 34px "Nunito";color:#fff;
  background:linear-gradient(95deg,#40c9ae,#2b94d0);box-shadow:0 18px 0 #187e9a,0 28px 30px #3c8aa833;cursor:pointer;
  transition:.15s transform,.15s box-shadow;
}
.primary-btn:active{transform:translateY(8px);box-shadow:0 10px 0 #187e9a}
.primary-btn span{margin-right:16px}
.best-score{display:inline-block;margin-top:48px;padding:10px 20px;border:3px solid #eee2d4;border-radius:28px;font-size:24px;background:#fffaf7}
.best-score b{color:#2fb6a7}.note{color:#7d7d82;font-size:18px;margin-top:26px}
.game-card{margin-top:-20px}
.hidden{display:none}
.game-top{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;text-align:left}
.game-top>div:first-child{flex:1}
.game-top small{font-size:18px;font-weight:800;color:#65707a}
.progress{height:14px;background:#e6ecef;border-radius:999px;margin-top:8px;overflow:hidden}
#progressBar{height:100%;width:5%;background:linear-gradient(90deg,#41cbb0,#2f94cf);transition:.3s}
.score-box{padding:10px 16px;border-radius:18px;background:white;box-shadow:0 5px 15px #0001;font-size:22px;font-weight:900}
.timer-wrap{margin:28px auto 12px;width:120px}
.timer-label{font-size:16px;color:#6d7680;font-weight:800}
.timer{font-size:54px;font-weight:900;color:#f26757}
.question-card{background:white;border-radius:30px;padding:30px 22px;box-shadow:0 10px 30px #00000012}
.level-badge{display:inline-block;padding:7px 13px;border-radius:999px;background:#dff7f2;color:#238b79;font-weight:900}
.question-card h2{font-size:52px;margin:25px 0}
.answers{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.answer-btn{
  border:3px solid #d9e6ea;background:#fff;border-radius:20px;padding:20px;font:900 30px "Nunito";cursor:pointer;transition:.15s;
}
.answer-btn:hover{transform:translateY(-2px);border-color:#52bcae}
.answer-btn.correct{background:#d8f7e6;border-color:#43be75;color:#1a7a47}
.answer-btn.wrong{background:#ffe0dc;border-color:#ee6d60;color:#9f382e}
.feedback{min-height:34px;margin-top:18px;font-size:22px;font-weight:900}
.secondary-btn{
  margin-top:26px;border:2px solid #dbe3e6;background:white;border-radius:18px;padding:14px 22px;font:800 18px "Nunito";cursor:pointer
}
.result-emoji{font-size:72px}.game-card h2{font-size:40px;margin:10px}
.final-score{font-size:72px;font-weight:900;color:#2aa997}.result-message{font-size:21px;color:#667}
footer{text-align:center;padding:18px;background:#c9f1f3;font-weight:700}
@media(max-width:600px){
  .hero{height:520px}
  .characters{transform:translateX(-50%) scale(.78);transform-origin:bottom center}
  .sky-decor .num{font-size:58px}
  .board{transform:rotate(-7deg) scale(.8);transform-origin:left bottom}
  .signs{transform:scale(.78);transform-origin:right bottom}
  .home-card,.game-card{padding:50px 22px 36px}
  h1{font-size:44px}
  .subtitle{font-size:22px;margin:25px 0 28px}
  .stats-card{padding:16px 8px;gap:6px}
  .stat{font-size:15px;gap:7px}
  .icon{width:42px;height:42px}
  .primary-btn{font-size:26px;padding:21px 12px}
  .question-card h2{font-size:43px}
}
@media(max-width:400px){
  .stat strong{font-size:13px}
  .divider{height:38px}
  .answers{grid-template-columns:1fr}
}
'''

js = r'''const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");
const startBtn = document.getElementById("startBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const homeBtn = document.getElementById("homeBtn");
const quitBtn = document.getElementById("quitBtn");
const questionText = document.getElementById("questionText");
const answersEl = document.getElementById("answers");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const questionIndexEl = document.getElementById("questionIndex");
const progressBar = document.getElementById("progressBar");
const feedback = document.getElementById("feedback");
const levelBadge = document.getElementById("levelBadge");
const finalScore = document.getElementById("finalScore");
const bestScoreEl = document.getElementById("bestScore");
const resultMessage = document.getElementById("resultMessage");

const TOTAL = 20;
let score = 0;
let current = 0;
let correctAnswer = 0;
let timer = null;
let timeLeft = 10;
let locked = false;

function getBestScore() {
  return Number(localStorage.getItem("mathAdventureBest") || 0);
}

function setBestScore(value) {
  if (value > getBestScore()) localStorage.setItem("mathAdventureBest", value);
  bestScoreEl.textContent = getBestScore();
}

setBestScore(0);

function show(screen) {
  [homeScreen, gameScreen, resultScreen].forEach(s => s.classList.add("hidden"));
  screen.classList.remove("hidden");
  window.scrollTo({top: document.querySelector(".hero").offsetHeight - 30, behavior:"smooth"});
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeQuestion() {
  const level = current < 10 ? 1 : 2;
  levelBadge.textContent = `Level ${level}`;

  let a, b, op;
  if (level === 1) {
    op = Math.random() < 0.5 ? "+" : "-";
    a = randomInt(1, 20);
    b = randomInt(1, 10);
    if (op === "-" && b > a) [a, b] = [b, a];
  } else {
    const r = Math.random();
    if (r < 0.45) op = "+";
    else if (r < 0.9) op = "-";
    else op = "×";
    if (op === "×") {
      a = randomInt(2, 10);
      b = randomInt(2, 10);
    } else {
      a = randomInt(10, 60);
      b = randomInt(1, 30);
      if (op === "-" && b > a) [a, b] = [b, a];
    }
  }

  correctAnswer = op === "+" ? a + b : op === "-" ? a - b : a * b;
  questionText.textContent = `${a} ${op} ${b} = ?`;

  const options = new Set([correctAnswer]);
  while (options.size < 4) {
    const spread = level === 1 ? 6 : 12;
    let candidate = correctAnswer + randomInt(-spread, spread);
    if (candidate >= 0) options.add(candidate);
  }

  const shuffled = [...options].sort(() => Math.random() - 0.5);
  answersEl.innerHTML = "";
  shuffled.forEach(value => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = value;
    btn.addEventListener("click", () => answer(value, btn));
    answersEl.appendChild(btn);
  });

  feedback.textContent = "";
  locked = false;
  timeLeft = 10;
  timerEl.textContent = timeLeft;
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      if (!locked) timeoutQuestion();
    }
  }, 1000);
}

function answer(value, btn) {
  if (locked) return;
  locked = true;
  clearInterval(timer);

  [...answersEl.children].forEach(b => {
    if (Number(b.textContent) === correctAnswer) b.classList.add("correct");
    b.disabled = true;
  });

  if (value === correctAnswer) {
    score += 5;
    scoreEl.textContent = score;
    btn.classList.add("correct");
    feedback.textContent = "Benar! +5 poin 🎉";
    feedback.style.color = "#1c9b61";
  } else {
    btn.classList.add("wrong");
    feedback.textContent = `Belum tepat. Jawabannya ${correctAnswer}.`;
    feedback.style.color = "#d45248";
  }

  setTimeout(nextQuestion, 950);
}

function timeoutQuestion() {
  locked = true;
  [...answersEl.children].forEach(b => {
    if (Number(b.textContent) === correctAnswer) b.classList.add("correct");
    b.disabled = true;
  });
  feedback.textContent = `Waktu habis! Jawabannya ${correctAnswer}.`;
  feedback.style.color = "#d45248";
  setTimeout(nextQuestion, 950);
}

function nextQuestion() {
  current++;
  if (current >= TOTAL) {
    endGame();
    return;
  }
  questionIndexEl.textContent = current + 1;
  progressBar.style.width = `${((current + 1) / TOTAL) * 100}%`;
  makeQuestion();
}

function startGame() {
  score = 0;
  current = 0;
  scoreEl.textContent = 0;
  questionIndexEl.textContent = 1;
  progressBar.style.width = `${100 / TOTAL}%`;
  show(gameScreen);
  makeQuestion();
}

function endGame() {
  clearInterval(timer);
  setBestScore(score);
  finalScore.textContent = score;
  if (score >= 90) resultMessage.textContent = "Luar biasa! Kamu jago matematika! 🌟";
  else if (score >= 65) resultMessage.textContent = "Bagus sekali! Sedikit lagi menuju skor sempurna.";
  else resultMessage.textContent = "Tetap semangat! Coba lagi dan pecahkan skor terbaikmu.";
  show(resultScreen);
}

function goHome() {
  clearInterval(timer);
  setBestScore(score);
  show(homeScreen);
}

startBtn.addEventListener("click", startGame);
playAgainBtn.addEventListener("click", startGame);
homeBtn.addEventListener("click", goHome);
quitBtn.addEventListener("click", goHome);
'''

readme = '''PETUALANGAN MATEMATIKA
======================

Isi:
- index.html
- style.css
- script.js

Cara menjalankan:
1. Ekstrak ZIP.
2. Buka index.html di browser.
3. Tidak memerlukan server/backend.

Fitur:
- Tampilan mobile-friendly terinspirasi dari contoh.
- 20 soal.
- 2 level.
- Timer 10 detik per soal.
- +5 poin untuk jawaban benar.
- Skor terbaik tersimpan di browser dengan localStorage.
- Tombol main ulang dan kembali ke menu.

Untuk upload ke GitHub Pages / Vercel:
- Upload ketiga file (index.html, style.css, script.js) ke repository.
'''

(out/"index.html").write_text(html, encoding="utf-8")
(out/"style.css").write_text(css, encoding="utf-8")
(out/"script.js").write_text(js, encoding="utf-8")
(out/"README.txt").write_text(readme, encoding="utf-8")

zip_path = Path("/mnt/data/petualangan_matematika.zip")
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    for f in out.iterdir():
        z.write(f, arcname=f.name)

print(f"Created: {zip_path}")
print("Files:", [f.name for f in out.iterdir()])
