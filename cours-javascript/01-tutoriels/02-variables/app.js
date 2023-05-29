//* Variable - Le plus basique des blocs de construction
//* Variable - Stocke, Accède, Modifie === Valeur
//* Déclare, Opérateur d'assignation, Assigne une valeur

let name = 'john doe';
console.log(name);

let address, zip, country;
console.log(address, zip, country);

// Assigne une valeur plus tard, modifie une valeur existante
address = '25 rue de la vague';
zip = '59650';
country = 'France';
console.log(address, zip, country);

name = 'tacos';
console.log(name);

// Convention de nommage
//* peut contenir des chiffres, lettres, underscore, $
//* doit commencer avec une lettre, $ ou _
//*  ne peut pas commencer avec un chiffre
let random123_$ = 'au pif';

//* pas de mot-clef (ex: let let)
//* camel case ou snake_case (pas une règle mais une bonne pratique)
let camelCase;
let snake_case;
