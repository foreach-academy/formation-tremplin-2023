class Dog {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  displayInfo() {
    console.log(
      `Nom : ${this.name} - Âge : ${this.age} - Race : ${this.breed}`
    );
  }
}

const pam = new Dog('Pam', 15, 'Yorkshire');
const mina = new Dog('Mina', 5, 'Yorkshire');
const hok = new Dog('Hok', 12, 'Jack Russel');

pam.displayInfo();
mina.displayInfo();
hok.displayInfo();
