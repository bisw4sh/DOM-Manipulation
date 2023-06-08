const madara = document.querySelector('.madara')
const hashirama = document.querySelector('.hashirama')
const img = document.querySelector('img')

madara.addEventListener('mouseover', incSize)
madara.addEventListener('mouseout', decSize)
hashirama.addEventListener('mouseover', incSize)
hashirama.addEventListener('mouseout', decSize)

function incSize(e) {
    e.target.style.width = '100%'
    img.style.width = '4rem'
    img.style.height = 'auto'
    // e.target.style.backgroundSize = 'cover'
}

function decSize(e) {
    e.target.style.width = '50%'
    img.style.width = '4rem'
    img.style.height = 'auto'

    // e.target.style.backgroundSize = 'contain'
}