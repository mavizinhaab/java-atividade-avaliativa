//4) Faça um programa que verifique dois números. O retorno deverá ser true se um dos números é 30 ou se a soma dos dois é 30.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número: ", (n1) => {
    rl.question("Digite o segundo número: ", (n2) => {
        let num1 = parseFloat(n1);
        let num2 = parseFloat(n2);

        let resultado = (num1 === 30 || num2 === 30 || (num1 + num2) === 30);

        console.log(`Resultado: ${resultado}`);
        rl.close();
    });
});
