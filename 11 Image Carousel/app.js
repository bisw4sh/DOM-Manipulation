const prev = document.getElementById('prev')
const next = document.getElementById('next')
const container = document.querySelector('.container')
const imagesel = document.querySelector('.imagesel')

const source = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg' ]

prev.addEventListener('click', () => {
    const src = imagesel.getAttribute("src")
    let index = Number(src[9])

    if(index == 0){
    imagesel.classList.add('.fadeinout')
        imagesel.setAttribute("src", `./images/${source.length - 1}.jpg`)
    }
    else{
    imagesel.classList.add('fadeinout')
        imagesel.setAttribute("src", `./images/${ index - 1}.jpg`)
    }
    imagesel.classList.add('fadeinout')

    setTimeout(() => {
        imagesel.classList.remove('fadeinout');
      }, 1000)
})

function nextPic() {
    const src = imagesel.getAttribute("src")
    let index = Number(src[9])

    if(index == source.length - 1){
    imagesel.classList.add('fadeinout')
        imagesel.setAttribute("src", `./images/0.jpg`)
    }
    else{
    imagesel.classList.add('fadeinout')
        imagesel.setAttribute("src", `./images/${ index + 1}.jpg`)
    }

    setTimeout(() => {
        imagesel.classList.remove('fadeinout');
      }, 1000)
}

next.addEventListener('click',() => {
    nextPic()
} )

setInterval(() => {
    nextPic()
}, 5000)