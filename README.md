<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Petualangan Matematika</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css" />
</head>

<body>

  <main class="app">

    <!-- HALAMAN AWAL -->
    <section id="homeScreen" class="screen active">

      <div class="hero">
        <div class="floating-number n1">2</div>
        <div class="floating-number n2">3</div>
        <div class="floating-number n3">+</div>
        <div class="floating-number n4">8</div>
        <div class="floating-number n5">5</div>

        <div class="cloud cloud1"></div>
        <div class="cloud cloud2"></div>

        <div class="hill hill1"></div>
        <div class="hill hill2"></div>

        <div class="blackboard">
          <span>8 - 3</span>
          <span>= 5</span>
        </div>

        <div class="character-area">
          <div class="kid">👦🏻</div>
          <div class="dino">🦕</div>
          <div class="kid">👧🏻</div>
        </div>
      </div>

      <div class="home-content">

        <div class="sparkle">✦</div>

        <h1>
          Petualangan<br />
          Matematika<span>!</span>
        </h1>

        <p class="subtitle">
          Belajar seru untuk Kelas 2 SD
        </p>

        <div class="game-info">
          <div class="info-item">
            <div class="info-icon mint">✓</div>
            <strong>20 soal</strong>
          </div>

          <div class="divider"></div>

          <div class="info-item">
            <div class="info-icon yellow">▥</div>
            <strong>2 level</strong>
          </div>

          <div class="divider"></div>

          <div class="info-item">
            <div class="info-icon pink">⏱</div>
            <strong>10 detik</strong>
          </div>
        </div>

        <button id="startButton" class="main-button">
          <span class="play-icon">▶</span>
          Mulai Bermain
        </button>

        <div class="best-score">
          🏆 Skor terbaik:
          <strong id="bestScoreHome">0</strong>
        </div>

        <p class="point-info">
          Setiap jawaban benar bernilai <strong>+5 poin.</strong>
        </p>

      </div>
    </section>


    <!-- HALAMAN GAME -->
    <section id="gameScreen" class="screen">

      <div class="game-header">
        <button id="homeButton" class="small-button">⌂</button>

        <div>
          <span class="small-label">LEVEL</span>
          <strong id="levelText">1</strong>
        </div>

        <div>
          <span class="small-label">SOAL</span>
          <strong>
            <span id="questionNumber">1</span>/20
          </strong>
        </div>

        <div>
          <span class="small-label">SKOR</span>
          <strong id="scoreText">0</strong>
        </div>
      </div>

      <div class="progress-wrapper">
        <div id="progressBar" class="progress-bar"></div>
      </div>

      <div class="timer-card">
        <span>⏱ Waktu</span>
        <strong id="timerText">10</strong>
      </div>

      <div class="question-card">
        <p class="question-title">
          Berapakah hasilnya?
        </p>

        <div id="questionText" class="question">
          8 + 3 = ?
        </div>
      </div>

      <div id="answerContainer" class="answers">
        <!-- pilihan jawaban dari JavaScript -->
      </div>

      <div id="feedback" class="feedback"></div>

    </section>


    <!-- HASIL -->
    <section id="resultScreen" class="screen">

      <div class="result-card">
        <div class="result-icon">🏆</div>

        <h2>Permainan Selesai!</h2>

        <p>Skor kamu</p>

        <div id="finalScore" class="final-score">
          0
        </div>

        <p id="resultMessage">
          Hebat!
        </p>

        <div class="result-stats">
          <div>
            <span>Benar</span>
            <strong id="correctTotal">0</strong>
          </div>

          <div>
            <span>Salah</span>
            <strong id="wrongTotal">0</strong>
          </div>
        </div>

        <button id="restartButton" class="main-button">
          Main Lagi
        </button>

        <button id="backHomeButton" class="secondary-button">
          Kembali ke Beranda
        </button>

      </div>

    </section>

  </main>

  <script src="script.js"></script>
</body>
</html>
