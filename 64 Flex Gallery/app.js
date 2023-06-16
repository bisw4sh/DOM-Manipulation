const panels = document.querySelectorAll('.panel')

panels.forEach( panel => {
    panel.addEventListener('click', (e) => {
        document.querySelectorAll('.panel').forEach( pan => pan.classList.remove('active'))
        e.target.classList.add('active')
    })
})