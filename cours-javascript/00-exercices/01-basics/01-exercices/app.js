//* Structures de contrôle

// 1
function checkNumber() {
  let input;
  let number;

  do {
    input = prompt('Veuillez saisir un nombre:');

    if (input === null) {
      return;
    }

    number = Number(input);
  } while (isNaN(number));

  if (number % 2 == 0) {
    console.log('Le nombre est pair.');
  } else {
    console.log('Le nombre est impair.');
  }
}

// 2
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    const isMultipleOf3 = i % 3 === 0;
    const isMultipleOf5 = i % 5 === 0;

    if (isMultipleOf3 && isMultipleOf5) {
      console.log('FizzBuzz');
    } else if (isMultipleOf3) {
      console.log('Fizz');
    } else if (isMultipleOf5) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

//* Fonctions

// 1
function sum(num1, num2) {
  return num1 + num2;
}

// 2
function factorial(n) {
  if (n <= 1) return n;

  return n * factorial(n - 1);
}

// 3
function arraySum(arr) {
  return arr.reduce(function (total, num) {
    return total + num;
  }, 0);
}

//* Tableaux

const arr = [];

for (let i = 0; i < 10; i++) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  arr.push(randomNum);
}

// 1
function highAndLowScore(arr) {
  return arr.reduce(
    function (acc, num) {
      if (num < acc.min) {
        acc.min = num;
      }

      if (num > acc.max) {
        acc.max = num;
      }

      return acc;
    },
    { min: arr[0], max: arr[0] }
  );
}

console.log(highAndLowScore(arr));

// 2
const tab = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  // return arr.slice().reverse()
  // return arr.toReversed();

  const newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
}

// 3
function concat(arr1, arr2) {
  // return arr1.concat(arr2.filter((item) => arr1.indexOf(item) === -1));

  const newArr = [];

  arr1.forEach(function (element) {
    newArr.push(element);
  });

  arr2.forEach(function (element) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
}

//* Objets

// 1
const person = {
  name: 'John Doe',
  age: 27,
  city: 'Paris',
  sayHi() {
    console.log(`${person.name}, ${person.age} ans, habite à ${person.city}`);
  }
};

// 2
const book = {
  title: 'Le Petit Prince',
  author: 'Antoine de Saint-Exupéry',
  publicationDate: 1943,
  displayInfo() {
    console.log(
      `${this.title}, écrit par ${this.author}, publié en ${this.publicationDate}`
    );
  }
};

// 3
const circle = {
  radius: 5,
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
  getArea() {
    return Math.PI * this.radius ** 2;
  }
};
