const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach( toggle => {
    toggle.addEventListener('change', e => doChange(e.target))
})

function doChange(eParam){

if(good.checked && cheap.checked && fast.checked){
    if(good === eParam){
        cheap.checked =false
    }

    if(cheap === eParam){
        fast.checked =false
    }

    if(fast === eParam){
        good.checked =false
    }
}
}