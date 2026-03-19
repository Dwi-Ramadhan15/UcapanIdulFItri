const express = require('express');
const path = require('path');
const app = express();

app.use('/assets', express.static(path.join(__dirname, '../assets')));

app.get('/', (req, res) => {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Selamat Idul Fitri</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
        <style>
            :root {
                --primary-bg: #0b2214;
                --gold: #d4af37;
                --gold-light: #f3e5ab;
                --text-light: #e0e0e0;
            }
            
            /* --- KEMBALI KE DASAR: TANPA KUNCIAN SAMA SEKALI --- */
            html, body {
                margin: 0;
                padding: 0;
                background-color: var(--primary-bg);
            }
            
            body {
                background-image: radial-gradient(circle at top center, #153a24 0%, transparent 70%);
                background-attachment: fixed;
                color: var(--gold);
                font-family: 'Poppins', sans-serif;
                padding: 3rem 1rem 5rem 1rem; /* Jarak murni: atas 3rem, kiri-kanan 1rem, bawah 5rem */
            }
            
            .container {
                width: 100%;
                max-width: 500px;
                margin: 0 auto; /* Cuma ditengahkan secara horizontal */
                text-align: center;
            }
            /* ---------------------------------------------------- */

            .card {
                background: rgba(255, 255, 255, 0.02);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(212, 175, 55, 0.15);
                padding: 3rem 1.5rem;
                border-radius: 24px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(212, 175, 55, 0.05);
            }
            h1 {
                font-family: 'Playfair Display', serif;
                font-size: 2.2rem;
                margin-bottom: 0.2rem;
                font-weight: 700;
                color: var(--gold-light);
                margin-top: 0;
            }
            h2 {
                font-family: 'Playfair Display', serif;
                font-size: 1.2rem;
                font-weight: 400;
                font-style: italic;
                margin-bottom: 0;
                opacity: 0.8;
            }
            p {
                font-size: 0.95rem;
                line-height: 1.8;
                color: var(--text-light);
                margin-bottom: 2rem;
            }
            .input-group {
                margin: 2rem 0;
            }
            .input-group label {
                display: block;
                font-size: 0.9rem;
                color: var(--text-light);
                margin-bottom: 0.8rem;
                letter-spacing: 1px;
            }
            input[type="text"] {
                width: 80%;
                background: transparent;
                border: none;
                border-bottom: 2px solid rgba(212, 175, 55, 0.3);
                color: var(--gold-light);
                font-family: 'Poppins', sans-serif;
                font-size: 1.2rem;
                text-align: center;
                padding: 0.5rem;
                transition: all 0.3s ease;
                outline: none;
            }
            input[type="text"]:focus {
                border-bottom-color: var(--gold);
            }
            button {
                background: transparent;
                border: 1px solid var(--gold);
                color: var(--gold);
                padding: 0.8rem 2.5rem;
                border-radius: 50px;
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.3s ease;
                letter-spacing: 1px;
                margin-bottom: 1rem;
            }
            button:hover {
                background: var(--gold);
                color: var(--primary-bg);
                box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
            }
            .screen {
                display: none;
                animation: fadeIn 0.8s ease-out forwards;
            }
            .screen.active {
                display: block;
            }
            .recipient-name {
                font-family: 'Playfair Display', serif;
                font-size: 1.8rem;
                color: var(--gold-light);
                margin: 1.5rem 0;
                font-weight: 700;
                border-bottom: 1px solid rgba(212, 175, 55, 0.2);
                padding-bottom: 1rem;
            }
            .sender {
                font-family: 'Playfair Display', serif;
                font-size: 1.1rem;
                color: var(--gold);
                margin-top: 1rem;
            }
            .moon {
                font-size: 2.5rem;
                margin-bottom: 1rem;
                animation: float 3s ease-in-out infinite;
                text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(15px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
            }
        </style>
    </head>
    <body>
        <audio id="bgMusic" loop>
            <source src="/assets/idulfitri.mp3" type="audio/mpeg">
        </audio>

        <div class="container">
            <div id="screen-1" class="card screen active">
                <div class="moon">🕌</div>
                <h2>Selamat Hari Raya</h2>
                <h1>Idul Fitri 1447 H</h1>
                <p style="margin-bottom: 1rem;">Ada pesan spesial untukmu.</p>
                
                <div class="input-group">
                    <label>Input namamu disini ya 😀</label>
                    <input type="text" id="guestName" placeholder="Ketik nama di sini..." autocomplete="off">
                </div>
                
                <button onclick="openCard()">Buka Pesan</button>
            </div>

            <div id="screen-2" class="card screen">
                <div class="moon">🌙✨</div>
                <h2>Teruntuk,</h2>
                <div class="recipient-name" id="display-name">Fulan</div>
                
                <p>
                    Taqabbalallahu minna wa minkum.<br>
                    Minal 'Aidin wal Faizin<br>
                    Mohon maaf lahir dan batin.<br><br>
                    Di hari yang fitri ini, mari kita bersihkan hati dan saling memaafkan. 
                    Semoga Allah SWT menerima amal ibadah kita, dan memberikan kita kedamaian serta keberkahan.
                </p>
                
                <div class="sender">
                    Salam Hangat,<br>
                    <strong>Dwi Ramadhan & Keluarga</strong>
                </div>
                <br><br>
                <button onclick="backToStart()" style="padding: 0.5rem 1.5rem; font-size: 0.8rem;">Kembali</button>
            </div>
        </div>

        <script>
            function openCard() {
                const music = document.getElementById('bgMusic');
                music.volume = 0.5;
                music.play().catch(e => console.log(e));

                let nameInput = document.getElementById('guestName').value;
                if (nameInput.trim() === '') {
                    nameInput = 'Sahabatku';
                }

                document.getElementById('display-name').innerText = nameInput;
                document.getElementById('screen-1').classList.remove('active');
                
                setTimeout(() => {
                    document.getElementById('screen-2').classList.add('active');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
            }

            function backToStart() {
                document.getElementById('screen-2').classList.remove('active');
                document.getElementById('guestName').value = ''; 
                
                const music = document.getElementById('bgMusic');
                music.pause();
                music.currentTime = 0;
                
                setTimeout(() => {
                    document.getElementById('screen-1').classList.add('active');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
            }
        </script>
    </body>
    </html>
  `;
    res.send(htmlContent);
});

module.exports = app;