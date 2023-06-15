const rangeVal = document.querySelector('#range')
const label = document.querySelector('label')
const thumb = document.querySelector('input[type="range"]')

const updateSlider= val => label.innerText = val
rangeVal.addEventListener('change', e => updateSlider(e.target.value))


thumb.addEventListener('mouseup', (e) => {
    const offsetleft = document.querySelector('.range-container').offsetLeft
    const xPos = e.clientX - offsetleft
    console.log(xPos)

    if(xPos > 117){
        label.style.left = `${xPos - 50}px`
        label.style.rotate = '90deg'

    }
    else{
        label.style.left = `${xPos - 50}px`
        label.style.rotate = '-90deg'
    }
})