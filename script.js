// const gameLevelButton1 = document.querySelector('.game__level_button1');
// const gameLevelButton2 = document.querySelector('.game__level_button2');
// const gameLevelButton3 = document.querySelector('.game__level_button3');
// const body = document.querySelector('.body');

// gameLevelButton1.addEventListener('click', getFirstLevelDifficulty);
// gameLevelButton2.addEventListener('click', getSecondLevelDifficulty);
// gameLevelButton3.addEventListener('click', getThirdLevelDifficulty);

// function getFirstLevelDifficulty() {
//     body.textContent = '';
//     for (let i = 0; i < 6; i++) {
//         const card = document.createElement('img');
//         card.src = 'shirt.png';

//         body.appendChild(card);
//     }
// }

// function getSecondLevelDifficulty() {
//     body.textContent = '';
//     for (let i = 0; i < 12; i++) {
//         const card = document.createElement('img');
//         card.src = 'shirt.png';

//         body.appendChild(card);
//     }
// }

// function getThirdLevelDifficulty() {
//     body.textContent = '';
//     for (let i = 0; i < 18; i++) {
//         const card = document.createElement('img');
//         card.src = 'shirt.png';

//         body.appendChild(card);
//     }
// }


const body = document.querySelector('body');
const buttonStart = document.querySelector('.game__start');
const gameLevelButton1 = document.querySelector('.game__level_button1');
const gameLevelButton2 = document.querySelector('.game__level_button2');
const gameLevelButton3 = document.querySelector('.game__level_button3');



gameLevelButton1.addEventListener('click', () => {
    gameLevelButton1.classList.add('focus');
    gameLevelButton2.classList.remove('focus');
    gameLevelButton3.classList.remove('focus');
}
)

gameLevelButton2.addEventListener('click', () => {
    gameLevelButton2.classList.add('focus');
    gameLevelButton1.classList.remove('focus');
    gameLevelButton3.classList.remove('focus');
}
)

gameLevelButton3.addEventListener('click', () => {
    gameLevelButton3.classList.add('focus');
    gameLevelButton2.classList.remove('focus');
    gameLevelButton1.classList.remove('focus');
}
)

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