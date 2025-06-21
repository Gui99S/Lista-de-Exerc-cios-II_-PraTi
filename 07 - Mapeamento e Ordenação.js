// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

const prompt = require('prompt-sync')();

function getNomesOrdenadosPorPreco(produtos) {
    const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
    
    return produtosOrdenados.map(produto => produto.nome);
}

const produtos = [];

const quantidade = parseInt(prompt("Quantos produtos deseja cadastrar? "));

for (let i = 0; i < quantidade; i++) {
    console.log(`\nProduto ${i + 1}:`);
    const nome = prompt("Nome: ");
    const preco = parseFloat(prompt("Preço: R$ "));
    
    produtos.push({ nome, preco });
}

const nomesOrdenados = getNomesOrdenadosPorPreco(produtos);
console.log("\nProdutos ordenados por preço crescente:");
console.log(nomesOrdenados);