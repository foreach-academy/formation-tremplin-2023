// compteur initial
let count = 0;

// sélectionne la valeur value et les boutons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

const setColor = (count) => {
  if (count < 0) {
    return 'red';
  } else if (count > 0) {
    return 'green';
  } else {
    return '#222';
  }
};

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    value.style.color = setColor(count);
    value.textContent = count;
  });
});
