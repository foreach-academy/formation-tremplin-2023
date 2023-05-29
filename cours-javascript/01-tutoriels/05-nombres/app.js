//* Les nombres
//* Non-typé = On ne déclare pas le type en JS

const number = 34;
const number2 = 2.456;
const number3 = '2.456';
// dans la console, les nombres sont bleus et le texte en noir
// console.log(number2);
// console.log(number3);

//* un peu de math
const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

// console.log(add);
// console.log(sub);
// console.log(mult);
// console.log(div);

//* +=, -=, /=, *=, ++, --, %
let number4 = 40;
number4 = number4 + 5;
// raccourci
number4 += 5;
number4 -= 5;
console.log(number4);
number4++;
number4++;
number4++;
number4++;
number4++;
console.log(number4);
number4--;
console.log(number4);

//* l'opérateur modulo (%) retourne le reste d'une division
//  pizza
const children = 3;
const slices = 10;

// combien de parts auront chaque enfant ?
const amount = slices / children;
console.log(amount);

const remainder = slices % children;
// il reste une part si les enfants ont le même nombre
console.log(remainder);

//* priorité des opérations
const random = 4 + 6 + 10 * 10;
console.log(random);
const random2 = (4 + 6 + 10) * 10;
console.log(random2);
