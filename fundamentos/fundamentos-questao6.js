//6) Escreva um programa que encontre o número com maior quantidade de ocorrência em   um array de números.


let numeros = [3, 3, 3, 2, 9, 3, 3, 3, 2, 2, 3, 2, 3, 3, 3];

let contagem = {};
let maisFrequente = numeros[0];
let maiorOcorrencia = 0;

for (let num of numeros) {
    contagem[num] = (contagem[num] || 0) + 1;

    if (contagem[num] > maiorOcorrencia) {
        maiorOcorrencia = contagem[num];
        maisFrequente = num;
    }
}

console.log(`O número mais frequente é ${maisFrequente} com ${maiorOcorrencia} ocorrências.`);
