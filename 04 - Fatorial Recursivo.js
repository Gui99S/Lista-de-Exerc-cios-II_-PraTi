// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.

const prompt = require('prompt-sync')();

function fatorial(n) {
    if (n < 0) {
        throw new Error("Não é possível calcular fatorial de número negativo!");
    }
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}

const input = prompt("Digite um número inteiro positivo para calcular o fatorial: ");
const numero = parseInt(input);

try {
    const resultado = fatorial(numero);
    console.log(`${numero}! = ${resultado}`);
} catch (error) {
    console.error("Erro:", error.message);
}