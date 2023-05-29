//* "" ou ''
let name = "je m'apelle john";
console.log(name);

//* string concatenation - combine des chaînes de caractères
//* `` - backticks (template string) une option plus simple que l'on verra plus tard
name = 'john';
const lastName = 'DOE';

console.log('Salut ! Ton nom est ' + name + ' ' + lastName);

const fullName = name + ' ' + lastName;
console.log('Salut ! Ton nom est ' + fullName);

console.log(`Salut ! Ton nom est ${fullName}`);
