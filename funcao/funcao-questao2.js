//2) Escreva uma função que receba uma frase e retorna a quantidade de vogais e de consoantes presentes na frase.

function contarVogaisConsoantes(frase) {
    let vogais = "aeiouAEIOU";
    let quantidadeVogais = 0;
    let quantidadeConsoantes = 0;

    for (let char of frase) {
        if (/[a-zA-Z]/.test(char)) {
            if (vogais.includes(char)) {
                quantidadeVogais++;
            } else {
                quantidadeConsoantes++;
            }
        }
    }

    return {
        vogais: quantidadeVogais,
        consoantes: quantidadeConsoantes
    };
}

