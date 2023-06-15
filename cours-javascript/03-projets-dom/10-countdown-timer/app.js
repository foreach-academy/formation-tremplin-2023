const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const formattedFutureDate = new Intl.DateTimeFormat('fr-FR', {
  dateStyle: 'full',
  timeStyle: 'medium'
}).format(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const date = futureDate.getDate();
giveaway.textContent = `Le cadeau se termine le ${formattedFutureDate}`;

const futureTime = futureDate.getTime();

function format(item) {
  if (item < 10) {
    return `0${item}`;
  }

  return item;
}

function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Désolé, cette offre a expirée !</h4>`;
  }
}

// countdown;
const countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();
