window.game = {
    difficultyLevel: getLevelDifficulty
}

const body = document.querySelector('body');
const buttonStart = document.querySelector('.game__start');
const gameLevelButton1 = document.querySelector('.game__level_button1');
const gameLevelButton2 = document.querySelector('.game__level_button2');
const gameLevelButton3 = document.querySelector('.game__level_button3');

gameLevelButton1.addEventListener('click', () => addFocus(gameLevelButton1, gameLevelButton2, gameLevelButton3));
gameLevelButton2.addEventListener('click', () => addFocus(gameLevelButton2, gameLevelButton3, gameLevelButton1));
gameLevelButton3.addEventListener('click', () => addFocus(gameLevelButton3, gameLevelButton2, gameLevelButton1));

function addFocus(element1, element2, element3) {
    element1.classList.add('focus'); 
    element2.classList.remove('focus'); 
    element3.classList.remove('focus'); 
}

buttonStart.addEventListener('click', getLevelDifficulty)

function getLevelDifficulty() {
    body.textContent = '';

    if (gameLevelButton1.classList.contains('focus')) {

        for (let i = 0; i < 6; i++) {
            const card = document.createElement('img');
            card.src = 'shirt.png';

            body.appendChild(card);
        }
    } else if (gameLevelButton2.classList.contains('focus')) {
        for (let i = 0; i < 12; i++) {
            const card = document.createElement('img');
            card.src = 'shirt.png';

            body.appendChild(card);
        }
    } else if (gameLevelButton3.classList.contains('focus')) {
        for (let i = 0; i < 18; i++) {
            const card = document.createElement('img');
            card.src = 'shirt.png';

            body.appendChild(card);
        }
    }
}