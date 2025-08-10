//14) Escreva um programa que determine se uma palavra está presente ou não em uma frase. Antes deve ter um “console.log(‘ops’)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite uma frase: ", (frase) => {
  rl.question("Digite a palavra para buscar: ", (palavra) => {
    console.log("ops");
    let presente = frase.includes(palavra);
    console.log(`A palavra "${palavra}" ${presente ? "está" : "não está"} presente na frase.`);
    rl.close();
  });
});
