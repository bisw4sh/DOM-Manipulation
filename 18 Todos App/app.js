const textBar = document.querySelector('.textbar')
const add = document.querySelector('.fa-plus')
const storage = document.querySelector('.storage')
const trash = document.querySelectorAll('.fa-solid.fa-trash')

add.addEventListener('click', () => {
  let data = textBar.value
  if(data === ''){
    textBar.placeholder = "Task can't be empty"
    return;       }

  let newEl = document.createElement('div')
  // let newtrashIcon = document.createElement('i')
  // let textData = document.createElement('span')

  newEl.classList.add('task')
  // newtrashIcon.classList.add('fa-solid')
  // newtrashIcon.classList.add('fa-trash')

  // textData.textContent = data

  let htmltext = `<span>${data}</span> <i class="fa-solid fa-trash"></i>`
  newEl.innerHTML = htmltext

  // newEl.appendChild(textData)
  // newEl.appendChild(newtrashIcon)
  storage.appendChild(newEl)
  textBar.value =''
})


trash.forEach(singleTrash => {
  singleTrash.addEventListener('click', (event) => {
  event.target.parentNode.remove()
  })
})