const displayName = document.querySelector('.displayName')
const userName = document.querySelector('.userName')
const bio = document.querySelector('.bio')
const followers = document.querySelector('.followersH')
const following = document.querySelector('.followingH')
const createdAt = document.querySelector('.createdAtH')
const username = document.querySelector('.username')
const get = document.querySelector('.get')
const dp = document.querySelector('.dp')
const form = document.getElementById("form")


async function getUser(user){
  const resp = await fetch(`https://api.github.com/users/${user}`)
  const respData = await resp.json()

setData(respData)
} 

function setData(data){
  displayName.textContent = data.name
  userName.textContent = data.login
  bio.textContent = data.bio || 'Null'
  followers.textContent = data.followers
  following.textContent = data.following
  createdAt.textContent = data.created_at
  dp.style.src = data.avatarurl
}

form.addEventListener("click", (e) => {
e.preventDefault()
const user = username.value
getUser(user)
})