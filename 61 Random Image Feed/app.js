const container = document.querySelector('.container')
const API_URL = 'https://picsum.photos/v2/list';

(async () => {
    const resp = await fetch(API_URL)
    const respPictures = await resp.json()
    respPictures.forEach(pic => {
        const img = document.createElement('img')
        img.src = `${pic.download_url}`
        container.appendChild(img)
    })
})()