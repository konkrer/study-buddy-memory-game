'use strict'


// just wanted to ham-fist this color change script into memory game, lol.
const bdy = document.body;
const partyBtn = document.querySelector('#btn-2');
let choice = 0;
let style;

partyBtn.addEventListener('click', function() {
    choice++;
    choice = choice > 2 ? 0 : choice;
    bdy.removeEventListener('mousemove', changeBackground);
    switch (choice) {
        case 0: 
            partyBtn.innerText = "Enable Party Mode"           
            break;
        case 1:
            partyBtn.innerText = "Enable Seizure Mode" 
            style = changeColorBodySlow;
            bdy.addEventListener('mousemove', changeBackground);
            break;
        case 2:
            partyBtn.innerText = "OFF" 
            style = changeColorBodyQuick;
            bdy.addEventListener('mousemove', changeBackground);
            break;   
        default:
            console.warn('Switch Malfunction, choice out of range.'); 
    }
})


function changeBackground(e) {
    let x = e.pageX;
    let y = e.pageY;
    style(x, y);
}

function changeColorBodyQuick(x, y) {
    let xColor = x % 256;
    let yColor = y % 256;
    if (Math.floor(x/256) & 1) xColor = 255 - xColor;
    if (Math.floor(y/256) & 1) yColor = 255 - yColor;
    
    let lastColor = Math.floor(Math.random() * 256);
    bdy.style.background = `rgb(${xColor}, ${yColor}, ${lastColor})`;
}


function changeColorBodySlow(x, y) {
    let xColor = Math.floor((x / window.innerWidth) * 256);
    let yColor = Math.floor((y / window.innerHeight) * 256);

    let lastColor = 255 - xColor;

    bdy.style.background = `rgb(${xColor}, ${yColor}, ${lastColor})`;
}