const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const checkpoints = document.querySelectorAll('.checkpoints')
const lines = document.querySelectorAll('.lines')

let currentPhase = 1

const buttonActivity = cp => {
    prev.disabled = false
    next.disabled = false

    if(cp === 1){
        console.log("first")
        prev.classList.remove('active')
        return
    }
    if(cp === 3) {
        next.disabled = true
        next.classList.remove('active')
        return
    }
    if(!prev.classList.contains('active') && !next.classList.contains('active')){
        prev.classList.add('active')
        next.classList.add('active')
    }
}


const updateLines = cp => {

        const currentLine = lines[cp-2]
        currentLine.style.backgroundColor = `var(--blue)`

}

const updateCheckpoints = cp => {
    const currentPoint = checkpoints[cp - 1]
    currentPoint.style.borderColor = `var(--blue)`
}

next.addEventListener('click', (e) => {
    buttonActivity(currentPhase)
    if(currentPhase === 4)
        return
    currentPhase++
    updateLines(currentPhase)
    updateCheckpoints(currentPhase)
})

prev.addEventListener('click', () => {
    buttonActivity(currentPhase)
    if(currentPhase === 1)
        return
    currentPhase--
    updateLines(currentPhase)
    updateCheckpoints(currentPhase)  
})