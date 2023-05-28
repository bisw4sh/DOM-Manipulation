const crash = document.querySelector('.crash')
const kick = document.querySelector('.kick')
const snare = document.querySelector('.snare')
const tom = document.querySelector('.tom')


crash.addEventListener('click', () => {
  const audio = new Audio("./sounds/crash.mp3")
  audio.play()
})

kick.addEventListener('click', () => {
  const audio = new Audio("./sounds/kick.mp3")
  audio.play()
})

snare.addEventListener('click', () => {
  const audio = new Audio("./sounds/snare.mp3")
  audio.play()
})

tom.addEventListener('click', () => {
  const audio = new Audio("./sounds/tom.mp3")
  audio.play()
})