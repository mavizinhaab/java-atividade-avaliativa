//13) Escreva um programa que leia uma lista de números. Eleve cada um dos números a 3 e depois some o total de valores obtidos.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite os números separados por espaço: ", (input) => {
  let numeros = input.trim().split(/\s+/).map(Number);

  let somaCubos = numeros.reduce((acc, num) => acc + Math.pow(num, 3), 0);

  console.log("Soma dos cubos:", somaCubos);

  rl.close();
});
