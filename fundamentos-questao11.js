// 11) Escreva um programa que receba uma lista de números e retorne os últimos n elementos da lista. ◦ Exemplo:
//▪ numeros = [10, 58, 68, 88, 25, 45]
//▪ n = 3
//▪ Resultado: [88, 25, 45]

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite os números separados por espaço: ", (inputNumeros) => {
  let numeros = inputNumeros.trim().split(/\s+/).map(Number);

  rl.question("Quantos últimos elementos deseja obter? ", (inputN) => {
    let n = parseInt(inputN);

    if (n > numeros.length) {
      console.log("O valor de n é maior que o tamanho da lista.");
    } else {
      let resultado = numeros.slice(-n);
      console.log("Resultado:", resultado);
    }

    rl.close();
  });
});
