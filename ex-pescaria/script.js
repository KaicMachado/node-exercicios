const prompt = require("prompt-sync")();
const pessoas = Number(prompt("Nº de pessoas:"));
const peixes = Number(prompt("Nº de peixes:"));

const valorEntrada = pessoas * 20;
let valorFinal;
if (pessoas < peixes) {
 valorFinal = valorEntrada + (peixes - pessoas) * 12;
 console.log(`O valor á ser pago é ${valorFinal}`);
} else {
 valorFinal = valorEntrada;
 console.log(`O valor á ser pago é ${valorFinal.toFixed(2)}`);
}
