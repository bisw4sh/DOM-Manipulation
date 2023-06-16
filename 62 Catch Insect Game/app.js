const playBtn = document.getElementById('start-btn')
const screen = document.querySelectorAll('.screen')
const chooseInsects = document.querySelectorAll('.choose-insect-btn')
const timeEl = document.querySelector('.time')
const game_container = document.getElementById('game-container')
const scoreEl = document.querySelector('.score')
const message = document.querySelector('.message')
let choosenInsect = {}
let seconds = 0
let score = 0

playBtn.addEventListener( 'click', () => screen[0].classList.add('up'))
const startGame = () => setInterval(updateTime, 1000)

chooseInsects.forEach( insect => {
    insect.addEventListener( 'click', (e) => {
        let imgSrc = e.target.getAttribute('src')
        let imgAlt = e.target.getAttribute('alt')
        choosenInsect = { imgSrc, imgAlt }
        screen[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function updateTime(){
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    const newInsect = document.createElement('div')
    newInsect.classList.add('insect')
    const {x, y} = getRandomLocation()
    newInsect.style.left = `${x}px`
    newInsect.style.top = `${y}px`
    newInsect.innerHTML = `<img src="${choosenInsect.imgSrc}" alt="${choosenInsect.imgAlt}" style="transform: rotate(${Math.random() * 360}deg)">`
    newInsect.addEventListener('click', catchInsects)
    game_container.appendChild(newInsect)
}

function getRandomLocation(){
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchInsects(){
    increaseScore()
    this.classList.add('caught')
    setTimeout( () => this.remove(), 2000)
    addInsects()

}

function increaseScore(){
    score++
    if(score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerText = `Score: ${score}`
}

function addInsects(){
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}