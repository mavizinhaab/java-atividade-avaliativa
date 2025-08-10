//1) Escreva uma função que receba um número e retorne o número invertido. Exemplo: 12356 retornará 65321. 

function inverterNumero(num) {
    let strNum = num.toString();
    let invertido = "";

    for (let i = strNum.length - 1; i >= 0; i--) {
    
        switch (strNum[i]) {
            case '0': invertido += '0'; break;
            case '1': invertido += '1'; break;
            case '2': invertido += '2'; break;
            case '3': invertido += '3'; break;
            case '4': invertido += '4'; break;
            case '5': invertido += '5'; break;
            case '6': invertido += '6'; break;
            case '7': invertido += '7'; break;
            case '8': invertido += '8'; break;
            case '9': invertido += '9'; break;
            default:
                break;
        }
    }

    return parseInt(invertido);
}

