const searchbar = document.querySelector('.searchbar')
const microphone = document.querySelector('.fa-microphone')
const search = document.querySelector('.fa-magnifying-glass')

search.addEventListener('click', () => {
    microphone.classList.toggle('hide')
    searchbar.classList.toggle('hide')
})