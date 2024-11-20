const navEl = document.querySelector('nav');
const mobileBtn = document.getElementById('mobile-open');
const mobileBtnExit = document.getElementById('mobile-close');

mobileBtn.addEventListener('click', () => {
    navEl.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
    navEl.classList.remove('menu-btn');
});

