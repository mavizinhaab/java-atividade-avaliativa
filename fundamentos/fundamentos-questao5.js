//5) Escreva um programa para checar três números inteiros. Se os números estiverem entre 50 e 99 então imprima uma mensagem de sucesso. Caso contrário, se um dos números não estiver dentro do intervalo, imprima uma mensagem de erro.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function foraDoIntervalo(num) {
    return num < 50 || num > 99;
}

rl.question("Digite o primeiro número: ", (num1) => {
    rl.question("Digite o segundo número: ", (num2) => {
        rl.question("Digite o terceiro número: ", (num3) => {
            let n1 = parseInt(num1);
            let n2 = parseInt(num2);
            let n3 = parseInt(num3);

            let fora = [];
            if (foraDoIntervalo(n1)) fora.push(`Primeiro número (${n1})`);
            if (foraDoIntervalo(n2)) fora.push(`Segundo número (${n2})`);
            if (foraDoIntervalo(n3)) fora.push(`Terceiro número (${n3})`);

            if (fora.length === 0) {
                console.log("Sucesso! Todos os números estão entre 50 e 99.");
            } else {
                console.log("Erro! Os seguintes números estão fora do intervalo 50 a 99:");
                fora.forEach(item => console.log(`- ${item}`));
            }

            rl.close();
        });
    });
});

