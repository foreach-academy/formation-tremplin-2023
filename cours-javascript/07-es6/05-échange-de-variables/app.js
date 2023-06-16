//* échanger des variables avec la déstructuration

let first = 'bob';
let second = 'john';

// pour échanger mes 2 variables, on doit avoir recours à une 3ème temporaire
// let temp = first;
// first = second;
// second = temp;

// avec destructuration
[second, first] = [first, second]; // ["bob", "john"]

console.log(first);
console.log(second);
