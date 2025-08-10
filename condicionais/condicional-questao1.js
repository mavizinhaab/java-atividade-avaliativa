// 1) Escreva um programa que compare dois números e diga qual o maior. Se um dos números for ímpar, ele deve sempre ser considerado maior

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o primeiro número: ", (input1) => {
  rl.question("Digite o segundo número: ", (input2) => {
    let num1 = parseInt(input1);
    let num2 = parseInt(input2);

    if (num1 % 2 !== 0 && num2 % 2 === 0) {
      console.log(`${num1} é maior (ímpar x par)`);
    } else if (num2 % 2 !== 0 && num1 % 2 === 0) {
      console.log(`${num2} é maior (ímpar x par)`);
    } else {
     
      if (num1 > num2) {
        console.log(`${num1} é maior`);
      } else if (num2 > num1) {
        console.log(`${num2} é maior`);
      } else {
        console.log("Os números são iguais");
      }
    }

    rl.close();
  });
});
