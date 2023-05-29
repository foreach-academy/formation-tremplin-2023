//*
let f = (arr) => {
  return arr
    .filter((num) => num % 2 === 1)
    .map((num) => num ** 2)
    .reduce((total, num) => total + num, 0);
};

//*
f = (strings) => {
  return [...strings].map((el) => el + '!');
};

//*
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

//*
let names = ['Amir', 'Betty', 'Cindy', 'Dalili'];

let [firstUser, secondUser] = names;

//*
const dataPoints = [
  [10, 20],
  [30, 40]
];

const [, [, y2]] = dataPoints;

//*
names = ['Amir', 'Betty', 'Cindy', 'Dalili'];

[firstUser, secondUser, ...otherUsers] = names;

const users = [firstUser, secondUser, otherUsers];

//*
const user = {
  name: 'Betty',
  cat: {
    name: 'Keanu',
    age: 2
  }
};

const {
  cat: { name }
} = user;

//*
const catDescription = (obj) => {
  return;
};

//*
const double = (n) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n * 2), 500);
  });
};

async function quadruple(n) {
  return await double(await double(n));
}

//*
const url = 'https://randomuser.me/api?page=1';

const fetchData = async () => {
  try {
    const resp = await fetch(url);
    const {
      results: [people]
    } = await resp.json();

    return people;
  } catch (error) {
    console.log(error);
  }
};

const people = await fetchData();

console.log(people.name.first);
console.log(people.name.last);
console.log(people.dob.age);
