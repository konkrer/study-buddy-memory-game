'use strict'


let titleFlipState = 0.07;
let currCard = null;
let score = 100;
let highScore = localStorage.getItem('highScore') || 0;
let timer;
let timerId;
let timersAddCards = [];
let outOfPlay = [];
let quesCount;
let block = false;

const title = document.querySelector('.title');
const cardDiv = document.querySelector('#card-div');
const startBtn = document.querySelector('#btn-1');
const scoreBoard = document.querySelector('#scoreboard');
const scoreType = document.querySelector('#score-type');
const hscoreDisplay = document.querySelector('#highscore');
const scoreDisplay = document.querySelector('#score');
const timerDisplay = document.querySelector('#timer');
const overlay = document.querySelector('.game-over');
const overlayFinalScore = document.querySelector('h1 span.final-score');
const overlayHighlScore = document.querySelector('h1 span.high-score');
const closeOverlay = document.querySelector('#overlay-close');


if (highScore) {
    hscoreDisplay.innerText = highScore;
    hscoreDisplay.parentElement.classList.remove('hidden');
}
setTimeout(function() {document.body.style.opacity = '1.0';}, 300);

startBtn.addEventListener('click', startGame);
closeOverlay.addEventListener('click', () => overlay.classList.toggle('display-none'));



function startGame(e) {
    e.preventDefault();
    initGame();
    resetGame();

    const topic = e.target.parentElement.parentElement.topic.value;  
    addCards(flatten(makeQuestionCards(topic)));
    flipTitle();
    countdownTimer();  
}

function flipTitle() {
  titleFlipState += 5;
  title.style.transform = `rotateX(${titleFlipState}turn)`;
}


function initGame() {
    currCard = null;
    scoreBoard.classList.remove('hidden');
    document.querySelector('.img-intro').classList.add('display-none');
    document.querySelector('.form-zone').classList.add('mt-0');
    cardDiv.removeEventListener('click', flipCard);
}

function resetGame() {
    clearTimersArray();         
    scoreType.innerText = 'POINTS:';
    scoreDisplay.innerText = score = 100;
    cardDiv.innerHTML = '';
    outOfPlay = [];
}


function makeQuestionCards(topic) {
    const questions = DATA[topic];
    quesCount = questions.length;
    return questions.map((ques, i) => cardFactory(ques, i));
}


function addCards(cards) {
    cards = shuffle(cards);
    for (let i in cards) {
        const cardTimerId = setTimeout(function() {
            cardDiv.innerHTML += cards[i];
            if (i==cards.length - 1) cardDiv.addEventListener('click', flipCard);
        }, 150 * +i);
        timersAddCards.push(cardTimerId);   
    }  
}

function clearTimersArray() {
  timersAddCards.forEach(timer => clearTimeout(timer));
  timersAddCards = [];
}

function setBlock(x=760) { 
    block = true;
    return setTimeout(() => {
        block = false;
    }, x);
}


function flipCard(e) {
    const targ = e.target;
    if (block) return;
    if (targ.id==='card-div') return;
    let flipCardBlocker = setBlock();

    let [card, show] = getCard(targ);
    let cardID = card.getAttribute('data-id')

    if (cardID===null) return;
    if (outOfPlay.includes(cardID)) return;

    doLogic(show, cardID, flipCardBlocker, card);
    flip(card); 
}

function doLogic(show, cardID, flipCardBlocker, card) {
    if (show && currCard) {
        if (currCard.getAttribute('data-id')===cardID) {
            outOfPlay.push(cardID);
            clearTimeout(flipCardBlocker);
            setTimeout(() => spinTwoCards(card), 1100);
            checkForWin();
        }else {
            if (score > 0) score -= 10;
            scoreDisplay.innerText = score;
            clearTimeout(flipCardBlocker);
            flipTwoCards(card);
        }
    }else if (show) currCard = card;
    else currCard = null;
}

function flipTwoCards(card) {
    setBlock(1010);
    for (let x of [card, currCard]) {
        setTimeout(function() {    
            flip(x);
            currCard = null;
        }, 1000)
    }
}

function spinTwoCards(card) {
    setBlock();
    currCard.classList.add('spin');
    currCard.lastElementChild.classList.add('solved');
    card.classList.add('spin');
    card.lastElementChild.classList.add('solved');
    currCard = null;
}

function flip(card) {
    card.classList.toggle('flipped');
}


function getCard(targ) {
    let card, show = false;
    if (targ.tagName==='IMG') {
        card = targ.parentElement.parentElement;
        // if image is on the back of card we are SHOWING the card
        // data-gif will be true for front of gif cards, not showing
        if (!targ.dataset['gif']) show = true;
    }else card = targ.parentElement;
    return [card, show];
}


function checkForWin() {
    if (outOfPlay.length===quesCount) {
        clearInterval(timerId);
        endGame();   
    }
}


function endGame() {
    scoreType.innerText = 'FINAL SCORE:';
    let finalScore = score * timer;
    scoreDisplay.innerText = overlayFinalScore.innerText = finalScore;
    highScore = Math.max(highScore, finalScore);
    hscoreDisplay.innerText = overlayHighlScore.innerText = highScore;
    hscoreDisplay.parentElement.classList.remove('hidden');
    localStorage.setItem('highScore', highScore);
    cardDiv.removeEventListener('click', flipCard);

    setTimeout(() => {
        overlay.classList.toggle('display-none');
    }, 3000)
}

function countdownTimer() {
    clearInterval(timerId);
    timerDisplay.innerText = 300;
    timer = 300;
    timerId = setInterval(() => {
        timer--;
        timerDisplay.innerText = timer;   
        if (timer===0) {
            clearInterval(timerId);
            endGame();
        }      
    }, 1000);
}


//--------helper functions----------------


function cardFactory (ques, i) {
    let pair = [];
    for (let string of Object.values(ques)) {
        if (/^https:\/\//.test(string)){
            string = `<img src="${string}" class="card-img" data-gif="true" alt="gif">`;
        }
        let cardHTML = 
            `<div class="scene">
                <div class="card" data-id="${i}">        
                    <div class="card-back">
                        <img class="card-img" src="static/riddler.jfif" alt="Image of the Riddler">
                    </div>
                    <div class="card-front">
                        ${string}
                    </div>
                </div> 
            </div>`;
        pair.push(cardHTML);
    }  
    return pair;
}


function shuffle(arr) {
    for (let i in arr) {
        let rando = Math.floor(Math.random() * arr.length);
        [arr[i], arr[rando]] = [arr[rando], arr[i]];
    }
    return arr;
}


function flatten(arr) {
  let out = [];
  arr.forEach(el => out.push(...el));
  return out;
}