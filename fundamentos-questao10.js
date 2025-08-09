//10) Escreva um programa Javascript que converta o nome e sobrenome de uma pessoa no formato:
// ◦ Exemplo: “Alan Mathison Turing”.
// ◦ Resultado: “T. M. Alan”.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome completo: ", (nomeCompleto) => {
    let partes = nomeCompleto.trim().split(/\s+/);

    if (partes.length < 2) {
        console.log("Por favor, digite pelo menos nome e sobrenome.");
        rl.close();
        return;
    }

    let ultimo = partes.pop();

    let iniciais = partes.map(p => p.charAt(0).toUpperCase() + ".");

    let primeiroNome = partes[0];

    let resultado = `${ultimo.charAt(0).toUpperCase()}. ${iniciais.slice(1).join(" ")} ${primeiroNome}`;

    console.log("Resultado:", resultado);

    rl.close();
});
