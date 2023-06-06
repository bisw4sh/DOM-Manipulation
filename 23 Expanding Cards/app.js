const items = document.querySelectorAll('.items')

items.forEach(item => {
    console.log(item)
    item.addEventListener('click', (e) => {
        console.log(e.target)
        items.forEach(i => {
            i.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})