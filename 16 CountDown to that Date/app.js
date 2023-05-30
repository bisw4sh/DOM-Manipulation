const toDate = document.getElementById('toDate')
const days = document.querySelector('.day')
const hrs = document.querySelector('.hrs')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

// const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();
const monthsArr = [ null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

updateCountdown();
function updateCountdown() {

  const tothatDate = new Date(`${monthsArr[Number(toDate.value.slice(5,7))]} ${Number(toDate.value.slice(8))}, ${Number(toDate.value.slice(0,4))} 00:00:00`).getTime() || new Date("Jan 1, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = Number(tothatDate - now);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  days.innerText = d;
  hrs.innerText = h;
  min.innerText = m;
  sec.innerText = s;
  setTimeout(updateCountdown, 1000)
}