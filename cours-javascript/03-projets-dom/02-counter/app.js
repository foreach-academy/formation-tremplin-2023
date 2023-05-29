const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
let counter = 0;

function setColor(count) {
  if (count > 0) {
    return 'green';
  } else if (count < 0) {
    return 'red';
  } else {
    return 'black';
  }
}

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains('increase')) {
      counter++;
    }

    if (styles.contains('reset')) {
      counter = 0;
    }

    if (styles.contains('decrease')) {
      counter--;
    }

    value.style.color = setColor(counter);
    value.textContent = counter;
  });
});
