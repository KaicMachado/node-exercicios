const prompt = require("prompt-sync")();

const velocidadePermitida = Number(prompt("Velocidade Permitida: "));
const velocidadeCondutor = Number(prompt("Velocidade do Condutor: "));

const limiteVelocidadeLeve = velocidadePermitida * 1.2; // 20% acima da velocidade permitida

if (velocidadeCondutor <= velocidadePermitida) {
 console.log("Sem Multa");
} else if (velocidadeCondutor <= limiteVelocidadeLeve) {
 console.log("Multa Leve");
} else {
 console.log("Multa Grave");
}
