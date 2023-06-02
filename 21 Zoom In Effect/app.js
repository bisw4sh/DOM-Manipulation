const container = document.querySelector('.imgContainer')
const image = document.querySelector('.imgContainer img')


container.addEventListener('mouseover', (e) => {
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop

    image.style.transformOrigin = `${x}px ${y}px`;
    image.style.transform = "scale(3)";
})

container.addEventListener('mouseout', () => {

    image.style.transformOrigin = `center center`;
    image.style.transform = "scale(1)";
})