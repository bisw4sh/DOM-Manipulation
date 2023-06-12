const dice = document.querySelector('.dice')
const roll = document.querySelector('.roll')

const genRandomNumber = () => Math.ceil(Math.random() * 6)

roll.addEventListener( 'click', () => {
    const randNum = genRandomNumber()
    console.log(randNum)
    dice.style.transition = 'transform 0.5s'

    switch(randNum){
        case 1:
        dice.innerHTML = `<i class="fa-solid fa-dice-one"></i>`
        break

        case 2:
        dice.innerHTML = `<i class="fa-solid fa-dice-two"></i>`
        break

        case 3:
        dice.innerHTML = `<i class="fa-solid fa-dice-three"></i>`
        break

        case 4:
        dice.innerHTML = `<i class="fa-solid fa-dice-four"></i>`
        break

        case 5:
        dice.innerHTML = `<i class="fa-solid fa-dice-five"></i>`
        break

        case 6:
        dice.innerHTML = `<i class="fa-solid fa-dice-six"></i>`
        break

        default:
        dice.innerHTML = `<i class="fa-solid fa-dice"></i>`
    }

        dice.style.transform = 'rotate(360deg)'

        setTimeout(() => {
            dice.style.transform = 'none'
        }, 150)
})