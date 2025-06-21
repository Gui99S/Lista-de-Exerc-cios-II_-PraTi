// 6. Memorization
// Implemente function memorize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

const prompt = require('prompt-sync')();

function memorize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache[key] !== undefined) {
            console.log("Retornando resultado memorizado");
            return cache[key];
        }
        
        const result = fn(...args);
        cache[key] = result;
        console.log("Calculando e armazenando no cache");
        return result;
    };
}

// Teste
function soma(a, b) {
    return a + b;
}

const memorizedSoma = memorize(soma);

console.log("Testando - Digite dois números para somar");
const a = parseFloat(prompt("Primeiro número: "));
const b = parseFloat(prompt("Segundo número: "));

// Primeira chamada
console.log("Primeira chamada:");
const resultado1 = memorizedSoma(a, b);
console.log(`Resultado: ${resultado1}`);

// Segunda chamada
console.log("\nSegunda chamada:");
const resultado2 = memorizedSoma(a, b);
console.log(`Resultado: ${resultado2}`);

// Terceira chamada
console.log("\nTerceira chamada:");
const c = parseFloat(prompt("Terceiro número: "));
const resultado3 = memorizedSoma(a, c);
console.log(`Resultado: ${resultado3}`);