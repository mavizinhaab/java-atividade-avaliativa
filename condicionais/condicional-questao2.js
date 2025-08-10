//2) Escreva um programa que realize uma iteração entre 0 e 50. Para cada número iterado, determine se o número é par ou ímpar.60


for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(`${i} é par`);
  } else {
    console.log(`${i} é ímpar`);
  }
}
