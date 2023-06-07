const hamburger = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close')
const main = document.querySelector('.main')
const wrapper = document.querySelector('.wrapper')
const nav = document.querySelector('nav')

const handleHamburger = () => {
     hamburger.style.transform = "translate(50px, -50px)"
     closeBtn.style.transform = "translate(95px, -30px)"
    //  const rH = hamburger.getBoundingClientRect()
    //  const rC = closeBtn.getBoundingClientRect()
    //  console.log("Hamburger " + rH.left, rH.top)
    //  console.log("Close Btn " + rC.left, rC.top)

    wrapper.style.transform = "rotate(-20deg) translate(600px, -200px)"
    nav.style.left = "0"
    nav.style.bottom = "0"


}

const handleClose = () => {
    hamburger.style.transform = "translate(0, 0)"
    closeBtn.style.transform = "translate(0, 0)"
    // const rH = hamburger.getBoundingClientRect()
    // const rC = closeBtn.getBoundingClientRect()
    // console.log("Hamburger " + rH.left, rH.top)
    // console.log("Close Btn " + rC.left, rC.top)

    wrapper.style.transform = "rotate(0deg)"
    const rN = nav.getBoundingClientRect()
console.log("Hamburger " + rN.left, rN.top)

}

// const rH = hamburger.getBoundingClientRect()
// console.log("Hamburger " + rH.left, rH.top)
const rN = nav.getBoundingClientRect()
console.log("Hamburger " + rN.left, rN.top)

hamburger.addEventListener('click', handleHamburger)
closeBtn.addEventListener('click', handleClose)