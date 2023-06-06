const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const checkpoints = document.querySelectorAll('.checkpoints')
const lines = document.querySelectorAll('.lines')

let currentPhase = 1

const nextActivity = cp => {
    prev.disabled = false
    next.disabled = false

    if(cp === 3) {
        next.disabled = true
        next.classList.remove('active')
        return
    }
        prev.classList.add('active')
        next.classList.add('active')
}

const prevActivity = cp => {

    prev.disabled = false
    next.disabled = false

    if(cp === 1){
        prev.disabled = true
        prev.classList.remove('active')
        return
    }

    prev.classList.add('active')
    next.classList.add('active')

}


const updateLines = cp => {

    const currentLine = lines[cp-2]
    currentLine.style.backgroundColor = `var(--blue)`

}

const degradeLines = cp => {

    const currentLine = lines[cp - 1]
    currentLine.style.backgroundColor = `var(--grey)`

}

const updateCheckpoints = cp => {
    const currentPoint = checkpoints[cp - 1]
    currentPoint.style.borderColor = `var(--blue)`
}

const degradeCheckpoints = cp => {
    const currentPoint = checkpoints[cp]
    currentPoint.style.borderColor = `var(--grey)`
}

next.addEventListener('click', (e) => {
    nextActivity(currentPhase)
    if(currentPhase === 4)
        return
    currentPhase++
    updateLines(currentPhase)
    updateCheckpoints(currentPhase)
})


prev.addEventListener('click', () => {
    currentPhase--
    prevActivity(currentPhase)
    if(currentPhase === 0)
        return
    degradeLines(currentPhase)
    degradeCheckpoints(currentPhase)  
})