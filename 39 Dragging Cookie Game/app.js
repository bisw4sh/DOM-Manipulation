const containers = document.querySelectorAll('.container')
const items = document.querySelectorAll('.item')
const statusMsg = document.querySelector('.status')

items.forEach(item => {

  item.addEventListener('dragstart', (e) => {
    let selItem = e.target
    let selContainer = null


    containers.forEach( container => {

      container.addEventListener('dragover', e => {
        e.preventDefault()
        selContainer = e.target
      })

      container.addEventListener('drop', e => {
        e.preventDefault()
        selContainer = e.target
        if(selItem){
          selContainer.appendChild(selItem)
          selItem = null
        }
        completed()
      })
    })
  })
})

function completed() {
  let allMatch = true

  containers.forEach(container => {
    let conValue = container.getAttribute('data-value');
    let containerItems = container.querySelectorAll('.item');

    if (containerItems.length !== 1) {
      allMatch = false;
      return;
    }

    let itemValue = containerItems[0].getAttribute('data-value');
    if (conValue !== itemValue) {
      allMatch = false;
      return
    }
  })

  if (allMatch) {
    statusMsg.innerText = 'Go ask your mama'
    document.body.style.backgroundImage = "url('./cookies.jpg')"
  }
}