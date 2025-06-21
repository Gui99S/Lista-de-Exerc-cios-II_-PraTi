// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

const prompt = require('prompt-sync')();

function agruparVendasPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        if (acumulador[venda.cliente]) {
            acumulador[venda.cliente] += venda.total;
        } 
        else {
            acumulador[venda.cliente] = venda.total;
        }
        return acumulador;
    }, {});
}

const vendas = [];
const quantidade = parseInt(prompt("Quantas vendas deseja registrar? "));

for (let i = 0; i < quantidade; i++) {
    console.log(`\nVenda ${i + 1}:`);
    const cliente = prompt("Nome do cliente: ");
    const total = parseFloat(prompt("Total da venda: R$ "));
    
    vendas.push({ cliente, total });
}

const resultado = agruparVendasPorCliente(vendas);
console.log("\nTotal de vendas por cliente:");
console.log(resultado);