// DOM elements
const leftContainer = document.getElementById('left-cup-container');
const centerContainer = document.getElementById('center-cup-container');
const rightContainer = document.getElementById('right-cup-container');

const leftCupImg = document.getElementById('left-cup');
const centerCupImg = document.getElementById('center-cup');
const rightCupImg = document.getElementById('right-cup');

const leftButton = document.getElementById('left-button');
const centerButton = document.getElementById('center-button');
const rightButton = document.getElementById('right-button');

const leftTryButton = document.getElementById('left-try');
const centerTryButton = document.getElementById('center-try');
const rightTryButton = document.getElementById('right-try');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

const resetButton = document.getElementById('reset');

// state
let total = 0;
let wins = 0;

const hidingPlaces = [
    'left',
    'center',
    'right'
];

// functions
function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function resetStyles() {
    leftContainer.classList.remove('bingo', 'over-here', 'nope');
    centerContainer.classList.remove('bingo', 'over-here', 'nope');
    rightContainer.classList.remove('bingo', 'over-here', 'nope');
    leftCupImg.src = 'assets/cup.png';
    centerCupImg.src = 'assets/cup.png';
    rightCupImg.src = 'assets/cup.png';
    leftTryButton.classList.add('hidden');
    centerTryButton.classList.add('hidden');
    rightTryButton.classList.add('hidden');
    leftButton.disabled = false;
    centerButton.disabled = false;
    rightButton.disabled = false;
}

function handleGuess(userGuess, correctSpot) {
    resetStyles();
    const correctContainer = document.getElementById(`${correctSpot}-cup-container`);
    const changeImg = document.getElementById(`${correctSpot}-cup`);
    changeImg.src = 'assets/cup-with-ball.png';
    total++;
    if (userGuess === correctSpot) {
        correctContainer.classList.add('bingo');
        wins++;
    }
    if (userGuess !== correctSpot) {
        correctContainer.classList.add('over-here');const guessContainer = document.getElementById(`${userGuess}-cup-container`);
        guessContainer.classList.add('nope');
    }
    winsEl.textContent = wins;
    totalEl.textContent = total;
    lossesEl.textContent = total - wins;
}

function disableButtons(userGuess) {
    leftButton.disabled = true;
    centerButton.disabled = true;
    rightButton.disabled = true;
    document.getElementById(`${userGuess}-try`).classList.remove('hidden');
}

// event listeners 
leftButton.addEventListener('click', () => {
    let userGuess = 'left';
    let correctSpot = getRandomItem(hidingPlaces);
    handleGuess(userGuess, correctSpot);
    disableButtons(userGuess);
});

centerButton.addEventListener('click', () => {
    let userGuess = 'center';
    let correctSpot = getRandomItem(hidingPlaces);
    handleGuess(userGuess, correctSpot);
    disableButtons(userGuess);
});

rightButton.addEventListener('click', () => {
    let userGuess = 'right';
    let correctSpot = getRandomItem(hidingPlaces);
    handleGuess(userGuess, correctSpot);
    disableButtons(userGuess);
});

leftTryButton.addEventListener('click', () => {
    resetStyles();
});

centerTryButton.addEventListener('click', () => {
    resetStyles();
});

rightTryButton.addEventListener('click', () => {
    resetStyles();
});

resetButton.addEventListener('click', () => {
    resetStyles();
    total = 0;
    wins = 0;
    winsEl.textContent = wins;
    totalEl.textContent = total;
    lossesEl.textContent = total - wins;
});