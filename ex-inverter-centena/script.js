const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite sua centena:"));

// if (numero > 999 || numero < 100) {
//  console.log("Esse número não é uma centena!");
//  return;
// } else {
//  const unidade = numero % 10;
//  const dezena = (numero % 100) / 10;
//  const centena = numero / 100;
//  console.log(`Sua centena invertida é ${unidade}${dezena}${centena}`);
// }

const num1 = Math.floor(numero / 100);
const sobra = numero % 100;
const num2 = Math.floor(sobra / 10);
const num3 = sobra % 10;
console.log(`Sua centena invertida é ${num3}${num2}${num1}`);
