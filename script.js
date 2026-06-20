// ============================================
// کنترل آهنگ
// ============================================
const audio = document.getElementById('birthdaySong');
const musicBtn = document.getElementById('musicToggle');
let isPlaying = false;

document.addEventListener('click', function initAudio() {
    if (!isPlaying) {
        audio.play().catch(() => {});
        isPlaying = true;
        musicBtn.textContent = '🔇';
        document.removeEventListener('click', initAudio);
    }
});

musicBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (isPlaying) {
        audio.pause();
        musicBtn.textContent = '🔊';
        isPlaying = false;
    } else {
        audio.play().catch(() => {});
        musicBtn.textContent = '🔇';
        isPlaying = true;
    }
});

// ============================================
// ایدۀ ۴: دود شمع (خاموش شدن بعد از ۵ ثانیه)
// ============================================
setTimeout(() => {
    const candles = document.querySelectorAll('.candle');
    candles.forEach(candle => {
        candle.classList.add('extinguished');
    });
}, 5000);

// ============================================
// ایدۀ ۱: برف / گلبرگ ریز
// ============================================
(function createSnow() {
    const container = document.getElementById('snowContainer');
    const emojis = ['❄️', '🌸', '✨', '💮', '🌺'];
    
    for (let i = 0; i < 50; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        flake.style.left = Math.random() * 100 + '%';
        flake.style.fontSize = (Math.random() * 10 + 8) + 'px';
        flake.style.animationDuration = (Math.random() * 8 + 6) + 's';
        flake.style.animationDelay = (Math.random() * 10) + 's';
        flake.style.opacity = Math.random() * 0.6 + 0.3;
        container.appendChild(flake);
    }
})();

// ============================================
// ایدۀ ۳: افکت جرقه خودکار
// ============================================
setInterval(() => {
    const container = document.getElementById('sparkleContainer');
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    const colors = ['#ffd700', '#ff6b6b', '#6bcb77', '#4d96ff', '#ffb6c1'];
    sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.boxShadow = `0 0 15px ${sparkle.style.background}, 0 0 30px ${sparkle.style.background}`;
    container.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1500);
}, 800);

// ============================================
// انفجار ایموجی
// ============================================
function fireEmoji() {
    const emojis = ['🎉', '🎊', '✨', '💫', '🎆', '🎇', '⭐', '🌟', '💝', '❤️', '🧡', '💛'];
    const container = document.body;
    
    for (let i = 0; i < 40; i++) {
        const el = document.createElement('div');
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const size = Math.random() * 30 + 16;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 2 + 1.5;
        const delay = Math.random() * 0.5;
        
        el.textContent = emoji;
        el.style.cssText = `
            position: fixed;
            left: ${x}vw;
            top: ${y}vh;
            font-size: ${size}px;
            pointer-events: none;
            z-index: 10000;
            animation: emojiBurst ${duration}s ease-out ${delay}s forwards;
            transform: scale(0);
        `;
        container.appendChild(el);
        setTimeout(() => el.remove(), (duration + delay) * 1000 + 200);
    }
}

const emojiStyle = document.createElement('style');
emojiStyle.textContent = `
    @keyframes emojiBurst {
        0% { transform: scale(0) rotate(0deg); opacity: 0; }
        20% { transform: scale(1.5) rotate(20deg); opacity: 1; }
        100% { transform: scale(1) rotate(360deg) translateY(-80px); opacity: 0; }
    }
`;
document.head.appendChild(emojiStyle);

// ============================================
// آرزو کردن
// ============================================
function showWish() {
    const wishes = [
        '💫 آرزو می‌کنم همیشه شاد باشی!',
        '🌺 روزت پر از عشق و لبخند!',
        '✨ بهترین‌ها در انتظار توست!',
        '🌟 کاشکی همیشه موفق باشی!',
        '💖 هر روزت بهتر از دیروز!',
        '🎈 آرزوهای قشنگت برآورده بشه!'
    ];
    
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    
    const toast = document.createElement('div');
    toast.textContent = randomWish;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255,182,193,0.12);
        backdrop-filter: blur(20px);
        padding: 14px 28px;
        border-radius: 50px;
        color: #fff;
        font-size: 1.1rem;
        font-weight: 500;
        border: 1px solid rgba(255,182,193,0.2);
        box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        z-index: 9999;
        animation: toastIn 0.5s ease-out;
        font-family: 'Segoe UI', sans-serif;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.5s ease-in forwards';
        setTimeout(() => toast.remove(), 600);
    }, 2500);
}

const toastStyle = document.createElement('style');
toastStyle.textContent = `
    @keyframes toastIn {
        0% { transform: translateX(-50%) translateY(50px); opacity: 0; }
        100% { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    @keyframes toastOut {
        0% { transform: translateX(-50%) translateY(0); opacity: 1; }
        100% { transform: translateX(-50%) translateY(30px); opacity: 0; }
    }
`;
document.head.appendChild(toastStyle);

console.log('%c🌹 تولدت مبارک Rose!', 'font-size:24px; font-weight:bold; color:#ffb6c1;');
console.log('%cامیدوارم هر روزت پر از لبخند باشه ❤️', 'font-size:16px; color:#ff6b81;');