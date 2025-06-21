// 9. Conversão Entre Formatos
// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

const prompt = require('prompt-sync')();

function paresParaObjeto(pares) {
    return pares.reduce((obj, par) => {
        const [chave, valor] = par;
        obj[chave] = valor;
        return obj;
    }, {});
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}

console.log("Escolha uma opção:\n1. Converter pares para objeto\n2. Converter objeto para pares");
const opcao = prompt("Opção: ");

if (opcao === "1") {
    const pares = [];
    const quantidade = parseInt(prompt("Quantos pares chave-valor deseja inserir? "));
    
    for (let i = 0; i < quantidade; i++) {
        console.log(`\nPar ${i + 1}:`);
        const chave = prompt("Chave: ");
        const valor = prompt("Valor: ");
        pares.push([chave, valor]);
    }
    
    const resultado = paresParaObjeto(pares);
    console.log("\nObjeto resultante:");
    console.log(resultado);

} else if (opcao === "2") {
    const obj = {};
    console.log("\nDigite propriedades (chave:valor). Linha vazia para terminar.");
    
    while (true) {
        const entrada = prompt("> ");
        if (entrada === "") break;
        
        const [chave, valor] = entrada.split(':').map(item => item.trim());
        if (chave && valor) obj[chave] = valor;
    }
    
    const resultado = objetoParaPares(obj);
    console.log("\nArray de pares resultante:");
    console.log(resultado);

} else {
    console.log("Opção inválida!");
}