const playArea = document.getElementById('play-area');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('time');

let score = 0;
let timeLeft = 30;
let gameInterval;

// Oyunu Başlat
function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    gameInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            spawnOSOLIcon();
        } else {
            clearInterval(gameInterval);
            alert(`Game Over! Your Score: ${score}`);
        }
    }, 1000);
}

// OSOL Simge Oluştur
function spawnOSOLIcon() {
    const osolIcon = document.createElement('div');
    osolIcon.classList.add('osol-icon');

    // Rastgele Konum
    const x = Math.random() * (playArea.offsetWidth - 60); // 60px genişlik için ayar
    const y = Math.random() * (playArea.offsetHeight - 60);
    osolIcon.style.left = `${x}px`;
    osolIcon.style.top = `${y}px`;

    // Tıklama Etkinliği
    osolIcon.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        osolIcon.remove(); // Tıklandıktan sonra simgeyi kaldır
    });

    playArea.appendChild(osolIcon);

    // 2 saniye içinde kaybolma
    setTimeout(() => {
        if (osolIcon.parentNode) {
            osolIcon.remove();
        }
    }, 2000);
}

// Oyunu Başlat
startGame();
