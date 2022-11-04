window.game = {
    difficultyLevel: getLevelDifficulty,
}

const body = document.querySelector('body')
const buttonStart = document.querySelector('.game__start')
const gameLevelButton1 = document.querySelector('.game__level_button1')
const gameLevelButton2 = document.querySelector('.game__level_button2')
const gameLevelButton3 = document.querySelector('.game__level_button3')
const menu = document.querySelector('.menu')
body.appendChild(menu)
const gameCard = document.createElement('div')
gameCard.classList.add('game__card')
const gameProcess = document.querySelector('.gameprocess')

gameLevelButton1.addEventListener('click', () =>
    addFocus(gameLevelButton1, gameLevelButton2, gameLevelButton3)
)
gameLevelButton2.addEventListener('click', () =>
    addFocus(gameLevelButton2, gameLevelButton3, gameLevelButton1)
)
gameLevelButton3.addEventListener('click', () =>
    addFocus(gameLevelButton3, gameLevelButton2, gameLevelButton1)
)

function addFocus(element1, element2, element3) {
    element1.classList.add('focus')
    element2.classList.remove('focus')
    element3.classList.remove('focus')
}

buttonStart.addEventListener('click', getLevelDifficulty)

function getLevelDifficulty() {
    if (gameLevelButton1.classList.contains('focus')) {
        for (let i = 0; i < 6; i++) {
            getFieldCard()
        }
    } else if (gameLevelButton2.classList.contains('focus')) {
        for (let i = 0; i < 12; i++) {
            getFieldCard()
        }
    } else if (gameLevelButton3.classList.contains('focus')) {
        for (let i = 0; i < 18; i++) {
            getFieldCard()
        }
    }
}

function getFieldCard() {
    body.textContent = ''
    const card = document.createElement('img')
    card.src = 'shirt.png'
    card.classList.add('card')
    body.appendChild(gameCard)
    gameCard.appendChild(card)
    gameProcess.classList.remove('hidden')
    body.appendChild(gameProcess)
}
