const prompt = require('prompt-sync')();

function ehDataValida(dia, mes, ano) {
    if (ano < 1 || mes < 1 || dia < 1) {
        return false;
    }
    
    if (mes > 12) {
        return false;
    }
    
    // Array com dias de cada mês (janeiro a dezembro)
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Ajuste de fevereiro em anos bissextos
    const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    if (ehBissexto) {
        diasPorMes[1] = 29; // 29º dia em fevereiro se bissexto
    }
    
    return dia <= diasPorMes[mes - 1];
}

const dia = parseInt(prompt('Digite o dia: '));
const mes = parseInt(prompt('Digite o mês: '));
const ano = parseInt(prompt('Digite o ano: '));

if (ehDataValida(dia, mes, ano)) {
    console.log(`A data ${dia}/${mes}/${ano} é válida.`);
} else {
    console.log(`A data ${dia}/${mes}/${ano} é inválida.`);
}