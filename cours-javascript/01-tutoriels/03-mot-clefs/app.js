//* LET vs CONST vs VAR

//* var
var value = 'une valeur';
value = 'une autre valeur';
console.log(value);

//* let
let name = 'john';
name = 'peter';
console.log(name);

//* const (constante) - ne peut pas être réassignées
const lastName = 'Doe';
//! la réassignation provoque une erreur
lastName = 'Smith';
