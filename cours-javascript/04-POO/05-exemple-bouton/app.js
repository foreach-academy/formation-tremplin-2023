const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  }
};

const btn = document.querySelector('.increment');

const increment = counter.increment.bind(counter);

btn.addEventListener('click', increment);
