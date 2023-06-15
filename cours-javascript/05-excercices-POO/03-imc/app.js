class Person {
  constructor(height, weight, age) {
    this.height = height;
    this.weight = weight;
    this.age = age;
  }

  calculateImc() {
    return this.weight / this.height ** 2;
  }

  interpretation() {
    const imc = this.calculateImc();

    if (imc <= 18.5) {
      return 'Insuffisance pondérale';
    } else if (imc >= 30) {
      return 'Obésité';
    } else {
      return 'Corpulence normal';
    }
  }
}

const person = new Person(1.73, 68, 30);
console.log(person.calculateImc());
console.log(person.interpretation());
