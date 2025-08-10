//5) Escreva uma função que receba uma frase e determine qual a maior palavra encontrada.

function maiorPalavra(frase) {
    let palavras = frase.split(/\s+/);
    let maior = "";

    for (let palavra of palavras) {
        if (palavra.length > maior.length) {
            maior = palavra;
        }
    }

    return maior;
}