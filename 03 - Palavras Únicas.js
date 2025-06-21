// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

const prompt = require('prompt-sync')();

const frase = prompt("Digite uma frase: ");

const palavras = frase.toLowerCase().split(' ');

const palavrasUnicas = [];

for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];
    let jaExiste = false;

    for (let j = 0; j < palavrasUnicas.length; j++) {
        if (palavrasUnicas[j] === palavraAtual) {
            jaExiste = true;
            break;
        }
    }

    if (jaExiste) {
        // Palavra repetida - não faz nada
    } else {
        palavrasUnicas.push(palavraAtual);
    }
}

console.log("Palavras únicas:", palavrasUnicas);