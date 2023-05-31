const textBar = document.querySelector('.textbar')
const add = document.querySelector('.fa-plus')
const storage = document.querySelector('.storage')
const trash = document.querySelectorAll('.fa-solid.fa-trash')

add.addEventListener('click', () => {
  let data = textBar.value
  if(data === ''){
    textBar.placeholder = "Task can't be empty"
    return
  } 
  let newEl = document.createElement('div')
  newEl.classList.add('task')
  let htmltext = `<span>${data}</span> <i class="fa-solid fa-trash"></i>`
  newEl.innerHTML = htmltext
  storage.appendChild(newEl)
  textBar.value =''

})


trash.addEventListener('click', (e) => {
  console.log(e)
})