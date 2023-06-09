const slides = document.querySelectorAll('.slide')
const left = document.getElementById('left')
const right = document.getElementById('right')

let activeSlide = 0

const setActiveSlide = () => {

  slides.forEach( slide => {
    slide.classList.remove('active')
  })

  slides[activeSlide].classList.add('active')
}

const setBG = () => {
  document.body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

left.addEventListener('click', () => {
  activeSlide--
  if(activeSlide < 0){
    activeSlide = slides.length - 1}

  setActiveSlide()
  setBG()  
})

right.addEventListener( 'click', () => {
  activeSlide++
  if(activeSlide > slides.length - 1){
    activeSlide = 0}

  setActiveSlide()
  setBG()  
})