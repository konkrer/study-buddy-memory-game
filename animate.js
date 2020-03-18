'use strict'


function pulseBrain() {
    const brainImg = document.querySelector('div.img-intro img');
    const timerId = setInterval(() => {
        if (document.querySelector('.img-intro').classList.contains('display-none')) clearInterval(timerId);
        brainImg.classList.toggle('brain-grow');
    }, 500)
}

window.addEventListener('load', (e) => pulseBrain());