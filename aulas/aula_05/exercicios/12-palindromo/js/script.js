function verificarPalindromo() {
    let palavra = document.getElementById('palavra').value;
    let ultimaLetra = palavra.length - 1;
    try {
        if (Number(palavra) || palavra === '') {
            return resultado.innerHTML = 'Digite uma palavra válida';
        }
        if (isNaN(palavra)) {
            for (let i = 0; i < palavra.length; i++) {
                if (palavra[i] === palavra[ultimaLetra - i]) {
                    return resultado.innerHTML = `A palavra  "${palavra}" é uma palíndromo`;
                } else {
                    return resultado.innerHTML = `A palavra "${palavra}" não é um palíndromo`;
                }
            }
        }
    }
    finally {
        document.getElementById('palavra').value = '';
    }
}
