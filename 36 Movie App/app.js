const API_KEY = `f3cefaa114b3983ae2e68d1a7b87267d`
const API_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2NlZmFhMTE0YjM5ODNhZTJlNjhkMWE3Yjg3MjY3ZCIsInN1YiI6IjY0ODI5YmVmYmYzMWYyNTA1ODgwNzZmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YXy1kLLl-3lG55lZcY9-Y-JmvoESTU_zqL-5Lds4cWs`
const POPULAR_URL = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const main = document.querySelector('.main')
const form = document.querySelector('#form')
const search = document.querySelector('.search')

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}` 
  }
}

const getMovie = async(FETCH_URL) => {
  const resp = await fetch(FETCH_URL, options)
  const resJSON = await resp.json()
  const movieArr = resJSON.results
  console.log(movieArr)
  main.innerHTML = ''

movieArr.forEach( movie => {
  const { title, backdrop_path, vote_average,overview } = movie
  if(backdrop_path === null)
   return
  const imgURL = `${IMG_PATH}${backdrop_path}`

  let movieEl = document.createElement('div')
  movieEl.classList.add('movie')

  movieEl.innerHTML = `
  <div class="imgWrap">
  <img src=${imgURL} alt="Poster" class="mPoster">
  </div>

  <div class="info">
    <span class="title"> <h3>${title}</h3> </span>
    <span class="rating"><h3>${vote_average}</h3></span>
  </div>

  <div class="overview">${overview}</div>
  `
  main.appendChild(movieEl)

})
}

getMovie(POPULAR_URL)


form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`

  if(searchTerm && searchTerm !== '') {
      getMovie(SEARCH_URL)

      search.value = ''
  } else {
      window.location.reload()
  }
})