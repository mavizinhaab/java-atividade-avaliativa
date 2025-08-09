//9) Escreva um programa que calcule a soma dos tamanhos de todas as palavras em uma frase.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma frase: ", (frase) => {
    
    let palavras = frase.split(" ").filter(p => p.length > 0); 

   
    let somaTamanhos = palavras.reduce((acum, palavra) => acum + palavra.length, 0);

    console.log(`A soma dos tamanhos das palavras é: ${somaTamanhos}`);

    rl.close();
});
