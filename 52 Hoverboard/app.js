const container = document.querySelector('.container')

window.addEventListener('load', () => {
    for( let i = 0; i < 625; i++){
        const sqEl = document.createElement('div')
        sqEl.classList.add('square')
        container.appendChild(sqEl)
    }

    const squares = document.querySelectorAll('.square')

    squares.forEach( square => {
        square.addEventListener('mouseover', (e) => {
            const bgColor = getrandColor()
            e.target.style.backgroundColor = bgColor

            setTimeout( () => {
                e.target.style.backgroundColor = 'rgb(64, 60, 60)'
            }, 3000)
        })
    })
})

const randNum = () => Math.floor( Math.random() * 255)
const getrandColor = () => `rgb(${randNum()},${randNum()},${randNum()})`