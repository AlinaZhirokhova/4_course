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
const fieldCard = document.querySelector('.field__card')
const arrCard = [
    'src/images/1.png',
    'src/images/2.png',
    'src/images/3.png',
    'src/images/4.png',
    'src/images/5.png',
    'src/images/6.png',
    'src/images/7.png',
    'src/images/8.png',
    'src/images/9.png',
    'src/images/10.png',
    'src/images/11.png',
    'src/images/12.png',
    'src/images/13.png',
    'src/images/14.png',
    'src/images/15.png',
    'src/images/16.png',
    'src/images/17.png',
    'src/images/18.png',
    'src/images/19.png',
    'src/images/20.png',
    'src/images/21.png',
    'src/images/22.png',
    'src/images/23.png',
    'src/images/24.png',
    'src/images/25.png',
    'src/images/26.png',
    'src/images/27.png',
    'src/images/28.png',
    'src/images/29.png',
    'src/images/30.png',
    'src/images/31.png',
    'src/images/32.png',
    'src/images/33.png',
    'src/images/34.png',
    'src/images/35.png',
    'src/images/36.png',
]

arrCard.forEach((i) => {
    let img = document.createElement('img')
    img.setAttribute('src', i)
    fieldCard.appendChild(img)
})
fieldCard.classList.add('hidden')
