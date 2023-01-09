import './main.scss'

declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
        game: any
    }
}

window.game = {
    blocks: {},
    renderBlock: function (blockName: string, container: HTMLElement) {
        this.blocks[blockName](container)
    },
    card: [],
    arrayFront: [],
    cardFront: undefined,
    target: undefined,
    target2: undefined,
    pairCard: undefined,
    clicks: undefined,
    buttonOver: undefined,
}

const body = document.querySelector('body') as HTMLBodyElement
const buttonStart = document.querySelector('.game__start') as HTMLElement
const gameLevelButton1 = document.querySelector(
    '.game__level_button1'
) as HTMLElement
const gameLevelButton2 = document.querySelector(
    '.game__level_button2'
) as HTMLElement
const gameLevelButton3 = document.querySelector(
    '.game__level_button3'
) as HTMLElement
const menu = document.querySelector('.menu') as HTMLElement
const gameProcess = document.querySelector('.gameprocess') as HTMLElement
const buttonStartOver = document.querySelector(
    '.gameprocess__button_start'
) as HTMLElement
let gameCard = document.createElement('div') as HTMLDivElement
gameProcess.appendChild(buttonStartOver)
body.appendChild(menu)
gameCard.classList.add('game__card')
gameCard.setAttribute('data-clicks', '0')
let array: Array<string> = []
const arrCard: Array<string> = [
    'static/1.png',
    'static/2.png',
    'static/3.png',
    'static/4.png',
    'static/5.png',
    'static/6.png',
    'static/7.png',
    'static/8.png',
    'static/9.png',
    'static/10.png',
    'static/11.png',
    'static/12.png',
    'static/13.png',
    'static/14.png',
    'static/15.png',
    'static/16.png',
    'static/17.png',
    'static/18.png',
    'static/19.png',
    'static/20.png',
    'static/21.png',
    'static/22.png',
    'static/23.png',
    'static/24.png',
    'static/25.png',
    'static/26.png',
    'static/27.png',
    'static/28.png',
    'static/29.png',
    'static/30.png',
    'static/31.png',
    'static/32.png',
    'static/33.png',
    'static/34.png',
    'static/35.png',
    'static/36.png',
]

gameLevelButton1.addEventListener('click', () =>
    addFocus(gameLevelButton1, gameLevelButton2, gameLevelButton3)
)
gameLevelButton2.addEventListener('click', () =>
    addFocus(gameLevelButton2, gameLevelButton3, gameLevelButton1)
)
gameLevelButton3.addEventListener('click', () =>
    addFocus(gameLevelButton3, gameLevelButton2, gameLevelButton1)
)

function addFocus(
    element1: HTMLElement,
    element2: HTMLElement,
    element3: HTMLElement
) {
    element1.classList.add('focus')
    element2.classList.remove('focus')
    element3.classList.remove('focus')
}

buttonStartOver.addEventListener('click', () => {
    location.reload()
})

buttonStart.addEventListener('click', getLevelDifficulty)

function getLevelDifficulty() {
    if (gameLevelButton1.classList.contains('focus')) {
        getField()
        getOpenCard(3)
    } else if (gameLevelButton2.classList.contains('focus')) {
        getField()
        getOpenCard(6)
    } else if (gameLevelButton3.classList.contains('focus')) {
        getField()
        getOpenCard(9)
    }
}

window.game.blocks['level'] = getLevelDifficulty

function getField() {
    body.innerHTML = ''
    gameProcess.classList.remove('hidden')
    body.appendChild(gameProcess)
}

function getOpenCard(a: Number) {
    for (let i = 0; i < a; i++) {
        const random = Math.floor(Math.random() * Object.values(arrCard).length)
        if (Object.values(arrCard)[random] === array[0]) {
            const random2 = Math.floor(
                Math.random() * Object.values(arrCard).length
            )
            array.push(Object.values(arrCard)[random2])
        }
        array.push(Object.values(arrCard)[random])
    }

    array = array.concat(array)
    array.sort(() => Math.random() - 0.5)
    shuffle(array)

    const arrayFront: Array<HTMLImageElement> = []

    array.forEach((i) => {
        const card = document.createElement('div')
        card.classList.add('card')

        const cardFront = document.createElement('img') as HTMLImageElement
        cardFront.setAttribute('src', i)
        cardFront.classList.add('card')
        body.appendChild(gameCard)
        gameCard.appendChild(card)
        card.appendChild(cardFront)
        arrayFront.push(cardFront)

        const pairCard: Array<HTMLImageElement> = []
        card.addEventListener('click', (e) => {
            const target = e.target as HTMLElement
            const arr = arrayFront.map((item) => item.classList.value)
            if (!arr.includes('card')) {
                start()
            }
            let clicks = Number(gameCard.dataset.clicks)
            clicks += 1
            gameCard.dataset.clicks = String(clicks as number)
            window.game.clicks = clicks

            if (!target.classList.contains('opacity')) {
                clicks = 1
                gameCard.dataset.clicks = String(clicks)
                return
            }

            if (clicks === 1) {
                target.classList.remove('opacity')

                window.game.target = target
            }

            if (clicks === 2) {
                target.classList.remove('opacity')
                window.game.target2 = target
            }

            if (
                window.game.target === undefined ||
                window.game.target2 === undefined
            ) {
                return
            } else {
                window.game.pairCard.unshift(
                    window.game.target.src,
                    window.game.target2.src
                )
            }

            if (window.game.pairCard[0] === window.game.pairCard[1]) {
                window.game.pairCard = []
                clicks = 0
                gameCard.dataset.clicks = String(clicks)
            } else if (
                window.game.pairCard[0] !== window.game.pairCard[1] &&
                clicks === 2
            ) {
                resultGame('static/loss.png', 'Вы проиграли!')
                stop()
            }

            const arrCard = arrayFront.map((item) => item.classList.value)
            if (!arrCard.includes('card opacity')) {
                resultGame('static/win.png', 'Вы выиграли!')
                stop()
            }
        })

        window.game.pairCard = pairCard
        window.game.card = card
        window.game.arrayFront = arrayFront
        window.game.cardFront = cardFront
        setTimeout(getFieldCard, 5000)
    })
}

function getFieldCard() {
    for (let i = 0; i < window.game.arrayFront.length; i++) {
        window.game.arrayFront[i].classList.add('opacity')
        window.game.clicks = 0
        gameCard.dataset.clicks = window.game.clicks
    }
}

function shuffle(array: Array<string>) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
}

function resultGame(picture: string, message: string) {
    const backgroundResult = document.createElement('div')
    backgroundResult.classList.add('background')

    const resultGameScreen = document.createElement('div')
    resultGameScreen.classList.add('result__game', 'game__absolute')

    const imgWin = document.createElement('img')
    imgWin.src = picture
    imgWin.classList.add('result__img')

    const youWin = document.createElement('h2')
    youWin.textContent = message
    youWin.classList.add('game__level')

    const timeGame = document.createElement('p')
    timeGame.textContent = 'Затраченное время:'
    timeGame.classList.add('result__time')

    const timerGame = document.createElement('p')
    timerGame.textContent = `${minOut + '.' + secOut}`
    timerGame.classList.add('result__time_timer')

    const buttonOver = document.createElement('button')
    buttonOver.textContent = 'Играть снова'
    buttonOver.classList.add('game__start')

    buttonOver.addEventListener('click', () => {
        location.reload()
    })

    body.appendChild(backgroundResult)
    body.appendChild(resultGameScreen)
    resultGameScreen.appendChild(imgWin)
    resultGameScreen.appendChild(youWin)
    resultGameScreen.appendChild(timeGame)
    resultGameScreen.appendChild(timerGame)
    resultGameScreen.appendChild(buttonOver)
}

// eslint-disable-next-line no-undef
let x: string | number | NodeJS.Timeout | undefined
let sec: number = 0
let min: number = 0
let secOut: string | number = 0
let minOut: string | number = 0

function start() {
    x = setInterval(timer, 1000)
}

function stop() {
    clearInterval(x)
}

function timer() {
    secOut = checkTime(sec)
    minOut = checkTime(min)

    sec = ++sec

    if (sec === 60) {
        min = ++min
        sec = 0
    }

    if (min === 60) {
        min = 0
        sec = 0
    }
    let a = document.querySelector('.sec') as HTMLElement
    let b = document.querySelector('.min') as HTMLElement

    a.innerHTML = secOut as string
    b.innerHTML = minOut as string
}

function checkTime(i: string | number) {
    if (i < 10) {
        i = '0' + i
    }
    return i
}
