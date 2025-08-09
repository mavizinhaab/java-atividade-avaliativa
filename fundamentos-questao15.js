//15) Escreva um programa que ordene todos os elementos numéricos de uma lista.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite os números separados por espaço: ", (input) => {
  let numeros = input.trim().split(/\s+/).map(Number);

  numeros.sort((a, b) => a - b);

  console.log("Lista ordenada:", numeros);

  rl.close();
});