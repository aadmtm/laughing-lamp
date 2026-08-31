<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Part</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: #ffffff;
        }

        .table-container {
            width: 100%;
            overflow-x: auto;
        }

        table {
            width: 100%;
            min-width: 1100px;
            border-collapse: collapse;
            table-layout: fixed;
            font-size: 18px;
        }

        td {
            height: 33px;
            padding: 3px 8px;
            border-right: 1px solid #777;
            border-bottom: 1px dotted #555;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        /* Kolom */
        .no {
            width: 4%;
            text-align: center;
            font-weight: bold;
            background: #f5f5f5;
        }

        .part {
            width: 17%;
            text-align: center;
            font-weight: bold;
            background: #f5f5f5;
        }

        .description {
            width: 19%;
            text-align: center;
            background: #f5f5f5;
        }

        .fth {
            width: 16%;
            text-align: center;
            font-weight: bold;
            background: #f5f5f5;
        }

        .qty {
            width: 6.5%;
            text-align: center;
            background: #f5f5f5;
        }

        .stock {
            width: 7%;
            text-align: right;
            padding-right: 10px;
            background: #f5f5f5;
        }

        .green {
            width: 8%;
            text-align: right;
            padding-right: 12px;
            background: #00b050;
            color: #000;
        }

        .green2 {
            width: 8%;
            text-align: right;
            padding-right: 12px;
            background: #00b050;
            color: #000;
        }

        .yellow {
            width: 7%;
            text-align: right;
            padding-right: 12px;
            background: #ffff00;
            color: #000;
        }

        .yellow2 {
            width: 7%;
            text-align: right;
            padding-right: 12px;
            background: #ffff00;
            color: #000;
        }

        .dash {
            color: #000;
        }

        /* Garis merah vertikal seperti pada gambar */
        td:nth-child(6),
        td:nth-child(7),
        td:nth-child(8) {
            border-left: 1px solid red;
        }

        /* Font tertentu */
        .bold {
            font-weight: bold;
        }
    </style>
</head>

<body>

<div class="table-container">
    <table>
        <tbody>

            <tr>
                <td class="no">1</td>
                <td class="part">62311-0K010</td>
                <td class="description">W/S,FR DR OPN TRIM RH</td>
                <td class="fth">FTH-272.0</td>
                <td class="qty">26</td>
                <td class="stock">30</td>
                <td class="green">5</td>
                <td class="green2">5</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">2</td>
                <td class="part">62311-0K030</td>
                <td class="description">W/S Fr Door OpenTrim Rh</td>
                <td class="fth">FTH-198.0</td>
                <td class="qty">46</td>
                <td class="stock">209</td>
                <td class="green">15</td>
                <td class="green2">15</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">3</td>
                <td class="part">62312-0K010</td>
                <td class="description">W/S,FR DR OPN TRIM LH</td>
                <td class="fth">FTH-273.0</td>
                <td class="qty">16</td>
                <td class="stock">20</td>
                <td class="green">-</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">4</td>
                <td class="part">62312-0K030</td>
                <td class="description">W/S Fr Door OpenTrim Lh</td>
                <td class="fth">FTH-199.0</td>
                <td class="qty">39</td>
                <td class="stock">167</td>
                <td class="green">5</td>
                <td class="green2">5</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">5</td>
                <td class="part">62331-0K020</td>
                <td class="description">W/S, RR DR OPN TRIM RH</td>
                <td class="fth">FTH-274.0</td>
                <td class="qty">24</td>
                <td class="stock">20</td>
                <td class="green">-</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">6</td>
                <td class="part">62331-0K030</td>
                <td class="description">W/S Fr Dr OpenTrim Rh</td>
                <td class="fth">FTH-216.0</td>
                <td class="qty">40</td>
                <td class="stock">95</td>
                <td class="green">5</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">7</td>
                <td class="part">62332-0K020</td>
                <td class="description">W/S, RR DR OPN TRIM LH</td>
                <td class="fth">FTH-275.0</td>
                <td class="qty">16</td>
                <td class="stock">20</td>
                <td class="green">-</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">8</td>
                <td class="part">62332-0K030</td>
                <td class="description">W/S Fr Dr Open Trim Lh</td>
                <td class="fth">FTH-217.0</td>
                <td class="qty">39</td>
                <td class="stock">105</td>
                <td class="green">5</td>
                <td class="green2">5</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">9</td>
                <td class="part">67861-0K030</td>
                <td class="description">W/S Fr Door Rh</td>
                <td class="fth">FTH-201.0</td>
                <td class="qty">64</td>
                <td class="stock">88</td>
                <td class="green">-</td>
                <td class="green2">5</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">10</td>
                <td class="part">67862-0K030</td>
                <td class="description">W/S Fr Door Lh</td>
                <td class="fth">FTH-202.0</td>
                <td class="qty">72</td>
                <td class="stock">88</td>
                <td class="green">5</td>
                <td class="green2">5</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">11</td>
                <td class="part">67871-0K030</td>
                <td class="description">W/S Rr Door Rh</td>
                <td class="fth">FTH-203.0</td>
                <td class="qty">79</td>
                <td class="stock">95</td>
                <td class="green">5</td>
                <td class="green2">5</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">12</td>
                <td class="part">67872-0K030</td>
                <td class="description">W/S Rr Door Lh</td>
                <td class="fth">FTH-204.0</td>
                <td class="qty">45</td>
                <td class="stock">95</td>
                <td class="green">5</td>
                <td class="green2">5</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">13</td>
                <td class="part">68141-0K040</td>
                <td class="description">RUN FR DR GLASS RH</td>
                <td class="fth">FTH-247.0</td>
                <td class="qty">25</td>
                <td class="stock">80</td>
                <td class="green">-</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">14</td>
                <td class="part">68142-0K040</td>
                <td class="description">RUN RR DR GLASS RH</td>
                <td class="fth">FTH-249.0</td>
                <td class="qty">69</td>
                <td class="stock">21</td>
                <td class="green">-</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">15</td>
                <td class="part">68151-0K040</td>
                <td class="description">RUN FR DR GLASS LH</td>
                <td class="fth">FTH-248.0</td>
                <td class="qty">25</td>
                <td class="stock">31</td>
                <td class="green">-</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">16</td>
                <td class="part">68152-0K040</td>
                <td class="description">RUN RR DR GLASS LH</td>
                <td class="fth">FTH-250.0</td>
                <td class="qty">17</td>
                <td class="stock">21</td>
                <td class="green">-</td>
                <td class="green2">5</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">17</td>
                <td class="part">62311-0K080</td>
                <td class="description">W/S FR DR OPN TRIM RH</td>
                <td class="fth">FTH-290.0</td>
                <td class="qty">27</td>
                <td class="stock">21</td>
                <td class="green">-</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">18</td>
                <td class="part">62312-0K080</td>
                <td class="description">W/S FR DR OPN TRIM LH</td>
                <td class="fth">FTH-291.0</td>
                <td class="qty">43</td>
                <td class="stock">15</td>
                <td class="green">-</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">19</td>
                <td class="part">62331-0K090</td>
                <td class="description">W/S RR DR OPN TRIM RH</td>
                <td class="fth">FTH-292.0</td>
                <td class="qty">35</td>
                <td class="stock">19</td>
                <td class="green">1</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">20</td>
                <td class="part">62332-0K090</td>
                <td class="description">W/S RR DR OPN TRIM LH</td>
                <td class="fth">FTH-293.0</td>
                <td class="qty">32</td>
                <td class="stock">18</td>
                <td class="green">1</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">21</td>
                <td class="part">67861-BZ130</td>
                <td class="description">W/S FR DOOR RH</td>
                <td class="fth">FDT-086.0</td>
                <td class="qty">52</td>
                <td class="stock">132</td>
                <td class="green">-</td>
                <td class="green2">6</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">22</td>
                <td class="part">67881-BZ081</td>
                <td class="description">W/S BACK DOOR</td>
                <td class="fth">FDZ-227.0</td>
                <td class="qty">64</td>
                <td class="stock">35</td>
                <td class="green">2</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">23</td>
                <td class="part">67862-BZ110</td>
                <td class="description">W/S FR DOOR LH</td>
                <td class="fth">FDT-087.0</td>
                <td class="qty">46</td>
                <td class="stock">88</td>
                <td class="green">5</td>
                <td class="green2">6</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">24</td>
                <td class="part">67871-BZ140</td>
                <td class="description">W/S RR DOOR R</td>
                <td class="fth">FDT-088.0</td>
                <td class="qty">56</td>
                <td class="stock">191</td>
                <td class="green">5</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">25</td>
                <td class="part">67872-BZ130</td>
                <td class="description">W/S RR DOOR L</td>
                <td class="fth">FDT-089.0</td>
                <td class="qty">50</td>
                <td class="stock">204</td>
                <td class="green">5</td>
                <td class="green2">-</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

            <tr>
                <td class="no">26</td>
                <td class="part">67881-BZ060</td>
                <td class="description">FDF-103.0-SP</td>
                <td class="fth">FDF-103.2</td>
                <td class="qty">61</td>
                <td class="stock">99</td>
                <td class="green">1</td>
                <td class="green2">1</td>
                <td class="yellow">-</td>
                <td class="yellow2">-</td>
            </tr>

        </tbody>
    </table>
</div>

</body>
</html>
