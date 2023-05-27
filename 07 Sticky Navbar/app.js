const colors = document.querySelectorAll('.color')
const navbar = document.querySelectorAll('.item')

colors.forEach( color => {
  const colorCode = getColor()
  color.innerText = `#${colorCode}`
  color.style.backgroundColor = `#${colorCode}`
})

navbar.forEach( nav => {
  const colorCode = getColor()
  nav.style.backgroundColor = `#${colorCode}`
})

function getColor() {
  const chars = "0123456789abcdef";
  let code = '';
  for(let index = 0; index < 6 ; index++){
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code;
}