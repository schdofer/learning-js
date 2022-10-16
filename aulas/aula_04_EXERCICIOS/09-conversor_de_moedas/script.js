
function converterDolar() {
    let valorReal = document.getElementById('valorReal').value;
    try {
        if (valorReal === '') { //caso o valor não seja digitado
            throw new Error('O valor está em branco!'); // throw permite que "lance" um erro personalizado
            // o new Error vai apresentar a mensagem de Error antes do texto
        }
        if (isNaN(valorReal)) {// caso o valor seja diferente de um número
            throw 'Digite um número válido!';
        }
        if (valorReal = Number(valorReal)) { //caso o valor digitado seja um número válido
            let dolar = valorReal / 5.33;
            resultadoConvertido.innerHTML = (valorReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ' convertido(s) para dólar:<br>' + (dolar).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
    }
    catch (error) {
        resultadoConvertido.innerHTML = error; // vai imprimir na tela os "throw" em caso de erros
    }
    finally { //finally executa a instrução independente da ocorrência de erros
        document.getElementById('valorReal').value = ''; // para limpar o valor no input
    }
}


function converterEuro() {
    let valorReal = document.getElementById('valorReal').value;
    try {
        if (valorReal === '') {
            throw 'O valor está em branco!';
        }
        if (isNaN(valorReal)) {
            throw 'Digite um número válido!';
        }
        if (valorReal = Number(valorReal)) {
            let euro = valorReal / 5.18;
            resultadoConvertido.innerHTML = (valorReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ' convertido(s) para euro:<br>' + (euro).toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });
        }

    }
    catch (error) {
        resultadoConvertido.innerHTML = error;
    }
    finally {
        document.getElementById('valorReal').value = '';
    }

}

function converterLibra() {
    let valorReal = document.getElementById('valorReal').value;
    try {
        if (valorReal === '') {
            throw 'O valor está em branco!';
        }
        if (isNaN(valorReal)) {
            throw 'Digite um número válido!';
        }
        if (valorReal = Number(valorReal)) {
            let libra = valorReal / 5.95;
            resultadoConvertido.innerHTML = (valorReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ' convertido(s) para libra esterlina:<br>' + (libra).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
        }
    }
    catch (error) {
        resultadoConvertido.innerHTML = error;
    }
    finally {
        document.getElementById('valorReal').value = '';
    }
}