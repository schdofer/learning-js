function verificarPalindromo() {
    let palavra = document.getElementById('palavra').value;
    let ultimaLetra = palavra.length - 1;
    try {
        if (parseInt(palavra) || !palavra) { //negado da palavra verifica se eh string vazia, indefinido...
            return resultado.innerHTML = 'Digite uma palavra válida';
        }
        if (isNaN(palavra)) {
            for (let i = 0; i < palavra.length; i++) {
                if (palavra[i] === palavra[ultimaLetra - i]) {
                    return resultado.innerHTML = `A palavra  "${palavra}" é um palíndromo`;
                } else {
                    return resultado.innerHTML = `A palavra "${palavra}" não é um palíndromo`;
                }
            }
        }
    }
    // catch(error){ para capturar o erro
    //     window.alert(error); feedback para o usuario
    // }
    finally {
        document.getElementById('palavra').value = '';
    }
}
