const bgImg = document.getElementById('bg-image')


window.addEventListener('scroll', () => {
  updateImg()
})

function updateImg(){
  bgImg.style.opacity = 1- window.pageYOffset/1000
  bgImg.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"
}