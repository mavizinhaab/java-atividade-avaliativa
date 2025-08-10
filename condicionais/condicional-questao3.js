//3) Escreva um programa que realize uma iteração entre 0 e 99. No final, exiba o valor da soma de todos os números pares e a soma de todos os números ímpares.

let somaPares = 0;
let somaImpares = 0;

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    somaPares += i;
  } else {
    somaImpares += i;
  }
}

console.log(`Soma dos pares: ${somaPares}`);
console.log(`Soma dos ímpares: ${somaImpares}`);
