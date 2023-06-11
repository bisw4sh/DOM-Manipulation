const wrapper = document.querySelector('.wrapper')
const heart = document.querySelector('.heartWrapper')
const counter = document.querySelector('.counter')

let count = 0

wrapper.addEventListener('dblclick',(e) => {
    count++
    heart.classList.add('active')
    const rect = wrapper.getBoundingClientRect()
    let currentX = e.clientX - rect.left
    let currentY = e.clientY - rect.top
    heart.style.left = `${currentX}px` 
    heart.style.top = `${currentY}px`
    counter.textContent = `${count}`


    setTimeout(()=> {
        heart.classList.remove('active')
    }, 300)
})