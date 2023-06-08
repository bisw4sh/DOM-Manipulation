const icon = document.querySelector('.icon')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const list = document.querySelector('ul')
const root = document.querySelector(':root')

icon.addEventListener('click', () => {
    line1.classList.toggle('active')
    line2.classList.toggle('active')
    list.classList.toggle('magic')
    root.style.setProperty('--hide', 'none')
} )