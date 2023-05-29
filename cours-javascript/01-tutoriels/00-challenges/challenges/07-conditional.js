const person1 = {
  name: 'john',
  age: 25,
  status: 'résident'
};

const person2 = {
  name: 'peter',
  age: 17,
  status: 'touriste'
};

if (person2.age >= 18 && person2.status === 'résident') {
  console.log('Vous pouvez voter');
} else {
  console.log('Vous ne pouvez pas voter');
}
