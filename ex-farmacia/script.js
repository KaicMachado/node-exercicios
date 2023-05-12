const prompt = require("prompt-sync")();
const valorCompra = Number(prompt("Valor da compra:"));

const valorSemParcelas = Math.floor(valorCompra / 20);

const parcelas =
 valorSemParcelas == 0 ? 1 : valorSemParcelas > 6 ? 6 : valorSemParcelas;
const valorParcela = valorCompra / parcelas;

console.log(`Pode pagar em ${parcelas}, de ${valorParcela}`);
