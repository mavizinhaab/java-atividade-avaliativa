// 7) Escreva um programa que receba uma frase, realize modificações em cada palavra e exiba a nova frase modificada seguindo os critérios:
// ◦ Se a palavra tiver um tamanho menor que 5 caracteres, transforme tudo em maiúsculo.
// ◦ Se a palavra tiver um tamanho maior que 5 caracteres, transforme tudo em minúsculo.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma frase: ", (frase) => {
    let palavras = frase.split(" ");
    
    let modificadas = palavras.map(palavra => {
        if (palavra.length < 5) {
            return palavra.toUpperCase(); 
        } else if (palavra.length > 5) {
            return palavra.toLowerCase(); 
        }
        return palavra; 
    });

    let novaFrase = modificadas.join(" ");
    console.log("Frase modificada:", novaFrase);

    rl.close();
});