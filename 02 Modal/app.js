const open = document.getElementById('open-btn')
const close = document.getElementById('close-btn')
const container = document.getElementById('container')
const wrapper = document.getElementById('wrapper')


const openFxn = () => {
    
    container.style.display = 'block';
    
}

const closeFxn = () => {
    container.style.display = 'none';
}
 
window.addEventListener('click',function (e) {

    if(e.target === container){
        container.style.display = 'none';
    }
    
})

open.addEventListener('click', openFxn)
// close.addEventListener('click', closeFxn)
wrapper.addEventListener('click', closeFxn)
