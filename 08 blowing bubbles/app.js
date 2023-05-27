const body = document.querySelector('body')

body.addEventListener('mousemove', event => {
  const x = event.offsetX;
  const y = event.offsetY;
  const newEl = document.createElement('div')
  newEl.style.top = `${y}px`;
  newEl.style.left = `${x}px`;
  body.appendChild(newEl)
  console.log(x,y)
  setTimeout( () => {
    newEl.remove()
  }, 3000)
})