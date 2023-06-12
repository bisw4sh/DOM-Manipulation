const countEL = document.querySelector('.count')
const readyEL = document.querySelector('.ready')
let count = 3;

setInterval(() => {
    countEL.classList.add('active');
    if (count < 0) {
        countEL.classList.remove('active');
        countEL.remove();
        return;
    }

    countEL.textContent = `${count}`;
    count--;

    if (count === 0) {
        setTimeout(() => {
            let ButtonEl = document.createElement('button');
            ButtonEl.innerText = 'Replay';
            readyEL.innerText = 'READY'
            document.querySelector('.counter').appendChild(ButtonEl);
            ButtonEl.addEventListener('click', () => {
                window.location.reload(true);
            });
        }, 1000);
    }

}, 1000);
