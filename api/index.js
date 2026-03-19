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
                padding: 3rem 1rem 5rem 1rem;
                overflow-x: hidden;
            }
            
            #stars {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
            }
            .star {
                position: absolute;
                background-color: #fff;
                border-radius: 50%;
                opacity: 0;
                animation: starDrift linear infinite;
            }
            
            .container {
                width: 100%;
                max-width: 500px;
                margin: 0 auto;
                text-align: center;
            }

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
                animation: glowPulse 3s ease-in-out infinite;
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
                box-shadow: 0 2px 5px rgba(212,175,55,0.1);
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
                transform: translateY(-2px);
            }
            .screen {
                display: none;
                animation: fadeInEnhanced 0.8s ease-out forwards;
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
                animation: glowPulse 4s ease-in-out infinite;
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
            @keyframes fadeInEnhanced {
                from { opacity: 0; transform: translateY(15px) scale(0.95); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
            }
            @keyframes starDrift {
                0% { top: 110vh; opacity: 0; transform: scale(0.5); }
                10% { opacity: 1; transform: scale(1); }
                90% { opacity: 1; transform: scale(1); }
                100% { top: -10vh; opacity: 0; transform: scale(0.5); }
            }
            @keyframes glowPulse {
                0%, 100% { text-shadow: 0 0 5px rgba(212,175,55,0.1); }
                50% { text-shadow: 0 0 15px rgba(212,175,55,0.4); }
            }
        </style>
    </head>
    <body>
        <div id="stars"></div>
        <audio id="bgMusic" loop>
            <source src="/assets/idulfitri.mp3" type="audio/mpeg">
        </audio>

        <div class="container">
            <div id="screen-1" class="card screen active">
                <div class="moon">🕌</div>
                <h2>Selamat Hari Raya</h2>
                <h1>Idul Fitri 1447 H</h1>
                
                <div class="input-group">
                    <input type="text" id="guestName" placeholder="Ketik nama di sini..." autocomplete="off"><br>
                </div>

                <div class="sender" style="margin-top: 0; margin-bottom: 2rem;">
                    Salam Hangat,<br>
                    <strong>Dwi Ramadhan & Keluarga</strong>
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
            function generateStars() {
                const container = document.getElementById('stars');
                const starCount = 60;
                
                for (let i = 0; i < starCount; i++) {
                    const star = document.createElement('div');
                    star.className = 'star';
                    
                    const size = Math.random() * 2.5 + 1 + 'px';
                    star.style.width = size;
                    star.style.height = size;
                    star.style.left = Math.random() * 100 + 'vw';
                    
                    const duration = Math.random() * 8 + 6;
                    star.style.animationDuration = duration + 's';
                    
                    const delay = Math.random() * 15;
                    star.style.animationDelay = '-' + delay + 's';
                    
                    if (Math.random() > 0.7) {
                        star.style.backgroundColor = '#d4af37'; 
                        star.style.boxShadow = '0 0 6px #d4af37';
                    }

                    container.appendChild(star);
                }
            }

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

            generateStars();
        </script>
    </body>
    </html>
  `;
    res.send(htmlContent);
});

module.exports = app;