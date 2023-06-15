const result = document.getElementById('result')
const filter = document.getElementById('filter')
const API_URL = 'https://randomuser.me/api?results=50'
const listItems = []

async function getData(){
  const resp = await fetch(API_URL)
  const { results } = await resp.json()
  result.innerHTML = ''

  results.forEach( user => {
    const li = document.createElement('li')

    listItems.push(li)

    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `
    result.appendChild(li)
  })
}

getData()

function filterData(params){
  listItems.forEach( person => {
    if(person.innerText.toLowerCase().includes(params.toLowerCase())){
      person.classList.remove('hide')
    }
    else{
      person.classList.add('hide')
    }
  })
}

filter.addEventListener('input', (e) => filterData(e.target.value))