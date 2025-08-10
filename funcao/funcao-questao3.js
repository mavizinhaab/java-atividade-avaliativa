//3) Escreva uma função que receba uma lista de 10 números e retorne o maior e o menor valor encontrado na lista.

function maiorMenor(lista) {
    if (lista.length !== 10) {
        throw new Error("A lista deve ter exatamente 10 números.");
    }

    let maior = lista[0];
    let menor = lista[0];

    for (let num of lista) {
        if (num > maior) maior = num;
        if (num < menor) menor = num;
    }

    return { maior, menor };
}

