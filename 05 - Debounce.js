// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.

const prompt = require('prompt-sync')();

function debounce(fn, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function executa() {
    console.log("Ação executada!");
}

const acaoDebounceada = debounce(executa, 2000);

console.log("Teste de Debounce");
console.log("Pressione Enter rapidamente várias vezes.");
console.log("Digite 'sair' para encerrar.\n");

while (true) {
    const entrada = prompt("Pressione Enter para acionar a função: ");
    
    if (entrada.toLowerCase() === 'sair') {
        break;
    }
    
    acaoDebounceada();
    console.log("Função acionada (aguardando delay)...");
}

console.log("Encerrado.");