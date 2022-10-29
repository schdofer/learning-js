let digitoInicial = 0;
const ano = 22;
let ultimoDigito = 0;


function gerarProtocolo() {
    digitoInicial++;
    let cincoDigitos = digitoInicial.toString().padStart(5, "0");
    //toString(): Para converter o número em uma string;
    // padStart(): para preencher o número convertido em string com os zeros;
    formarUltimosDigitos(cincoDigitos);

}

function formarUltimosDigitos(string) {
    let array = string.split(''); //transformei os cinco digitos numa array de string;
    let numberArray = array.map(Number); // converti a array de string em números;
    let soma = 0;
    for (let i = 0; i < numberArray.length; i++) {
        soma += numberArray[i];
        if (soma >= 9) soma = 9;
    }

    if (0 <= soma && soma <= 4) {
        ultimoDigito = 1;
    } else if (5 <= soma && soma <= 9) {
        ultimoDigito = 2;
    }

    resultado.innerHTML = string + "-" + ano + "-" + soma + ultimoDigito;

}