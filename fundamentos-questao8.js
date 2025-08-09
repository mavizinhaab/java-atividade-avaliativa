//8) Escreva um programa que exiba uma frase ao inverso.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma frase: ", (frase) => {
    let invertida = frase.split("").reverse().join("");
    console.log("Frase invertida:", invertida);
    rl.close();
});