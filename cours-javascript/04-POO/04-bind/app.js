//* bind - s'assigne, s'utilise plus tard, 1er argument - this, 2ème argument - liste d'items

const john = {
  name: 'john',
  age: 24,
  greet(city, country) {
    console.log(this);
    console.log(
      `Bonjour, je suis ${this.name}, j'ai ${this.age} ans. et j'habite à ${city}, ${country}`
    );
  }
};

const susan = {
  name: 'susan',
  age: 21
};

// assigne pour l'appeler plus tard
const susanGreet = john.greet.bind(susan, 'Valenciennes', 'France');

susanGreet();
