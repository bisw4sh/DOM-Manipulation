// const accordion = document.getElementsByClassName('content-container')

// for( i = 0; i < accordion.length; i++){

//idk why arrow fxn doesn't work
//     accordion[i].addEventListener('click', () => {
//         console.log(this)
//         this.classList.toggle('active')
//     })
// }




const accordion = document.getElementsByClassName('content-container')

for( i = 0; i < accordion.length; i++) {

accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
})

};