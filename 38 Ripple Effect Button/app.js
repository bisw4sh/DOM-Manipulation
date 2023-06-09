const btn = document.querySelector('.btn')
const circle = document.querySelector('.circle')


btn.addEventListener('click', (event) => {
    let rect = btn.getBoundingClientRect()
    let mousePos = { x: event.clientX, y: event.clientY }
    let btnPos = { x: rect.left, y : rect.top}
    let relPos = { x : mousePos.x - btnPos.x, y : mousePos.y - btnPos.y}

    circle.style.left = `${relPos.x}px`
    circle.style.top = `${relPos.y}px`

    circle.style.height = `500px`
    circle.style.width = `500px`

    setTimeout(() => {
        circle.style.height = `0px`
        circle.style.width = `0px`
    }, 500)

});