'use strict';

/* eslint-disable no-use-before-define */
/* global document, window */

// just wanted to ham-fist this color change script into memory game, lol.
const bdy = document.body;
const partyBtn = document.querySelector('#btn-2');
let choice = 0;
let style;

partyBtn.addEventListener('click', () => {
  choice++;
  choice = choice > 2 ? 0 : choice;
  bdy.removeEventListener('mousemove', changeBackground);
  switch (choice) {
    case 0:
      partyBtn.innerText = 'Enable Party Mode';
      break;
    case 1:
      partyBtn.innerText = 'Enable Seizure Mode';
      style = changeColorBodySlow;
      bdy.addEventListener('mousemove', changeBackground);
      break;
    case 2:
      partyBtn.innerText = 'OFF';
      style = changeColorBodyQuick;
      bdy.addEventListener('mousemove', changeBackground);
      break;
    default:
      // eslint-disable-next-line no-console
      console.warn('Switch Malfunction, choice out of range.');
  }
});

function changeBackground(e) {
  const x = e.pageX;
  const y = e.pageY;
  style(x, y);
}

function changeColorBodyQuick(x, y) {
  let xColor = x % 256;
  let yColor = y % 256;
  // eslint-disable-next-line no-bitwise
  if (xColor & 1) xColor = 255 - xColor;
  if (yColor) yColor = 255 - yColor;

  const lastColor = Math.floor(Math.random() * 256);
  bdy.style.background = `rgb(${xColor}, ${yColor}, ${lastColor})`;
}

function changeColorBodySlow(x, y) {
  const xColor = Math.floor((x / window.innerWidth) * 256);
  const yColor = Math.floor((y / window.innerHeight) * 256);

  const lastColor = (255 - yColor) * (1 - xColor / 255);

  bdy.style.background = `rgb(${xColor}, ${yColor}, ${lastColor})`;
}
