const prompt = require("prompt-sync")();
const numero = Number(prompt("Escreva um número e veja se é par ou ímpar:"));

// if (numero % 2 === 0) {
//  // se o resto de numero for igual a zero ele é par
//  console.log(`${numero} é par`);
// } else {
//  console.log(`${numero} é ímpar`);
// }

// Usando operador ternário :

if (
 numero % 2 === 0
  ? console.log(`${numero} é par`)
  : console.log(`${numero} é ímpar`)
);
