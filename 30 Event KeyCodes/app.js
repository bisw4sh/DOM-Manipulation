const key = document.querySelector('.key')
const keycode = document.querySelector('.keycode')
const eventcode = document.querySelector('.eventcode')

window.addEventListener('keydown', keyboardHandler)

function keyboardHandler(e){

    key.textContent = e.key
    key.classList.toggle('active')

    keycode.textContent = e.keyCode
    keycode.classList.toggle('active')
    
    eventcode.textContent = e.code
    eventcode.classList.toggle('active')

} 