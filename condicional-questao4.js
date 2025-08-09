//4) Escreva um programa que calcule as médias de 5 alunos. Siga as instruções abaixo: ◦ A lista de alunos será do tipo:
// ▪ alunos = [ [“Aluno1”, [10, 50, 100]], [“Aluno2”, [55, 78, 90]], ... ]
// ◦ Se a média do aluno for menor que 70, deverá ser exibido “Reprovado”.
// ◦ Se a média for maior que 70, exibir “Aprovado”.
// ◦ Deve ser exibido:
// ▪ Aluno1, média X, Aprovado/Reprovado.
// ▪ Aluno2, média X, Aprovado/Reprovado.
// ▪ etc.


let alunos = [
  ["Aluno1", [10, 50, 100]],
  ["Aluno2", [55, 78, 90]],
  ["Aluno3", [80, 75, 85]],
  ["Aluno4", [60, 60, 60]],
  ["Aluno5", [90, 95, 100]]
];

for (let [nome, notas] of alunos) {
  let soma = notas.reduce((acc, n) => acc + n, 0);
  let media = soma / notas.length;
  let status = media >= 70 ? "Aprovado" : "Reprovado";

  console.log(`${nome}, média ${media.toFixed(2)}, ${status}.`);
}
