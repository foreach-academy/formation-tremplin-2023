class Counter {
  constructor(title, value) {
    // titre
    this.title = title;
    // valeur par défaut pour le reset
    this.defaultValue = value;
    // valeur
    this.value = value;
    // élément compteur
    this.element = this.generateCounter();
    // élément pour afficher la valeur dans le DOM
    this.valueDOM = this.element.querySelector('.value');

    // 3 boutons
    this.incrementBtn = this.element.querySelector('.increment');
    this.decrementBtn = this.element.querySelector('.decrement');
    this.resetBtn = this.element.querySelector('.reset');

    // binder les 3 fonctions à "this"
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.increment = this.increment.bind(this);

    // faire les event listeners sur les boutons
    this.decrementBtn.addEventListener('click', this.decrement);
    this.resetBtn.addEventListener('click', this.reset);
    this.incrementBtn.addEventListener('click', this.increment);
  }

  generateCounter() {
    const element = document.createElement('section');
    element.innerHTML = `
    <h2>${this.title}</h2>
    <span class="value">${this.value}</span>
    <div class="btn-container">
      <button class="decrement">Décrémenter</button>
      <button class="reset">Reset</button>
      <button class="increment">Incrémenter</button>
    </div>
    `;
    document.body.append(element);
    return element;
  }

  // décrémenter
  decrement() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }

  // reset
  reset() {
    this.value = this.defaultValue;
    this.valueDOM.textContent = this.value;
  }

  // incrémenter
  increment() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter('Premier compteur', 100);
const secondCounter = new Counter('Second compteur', 200);
const thirdCounter = new Counter('Troisième compteur', 300);
