
function enviarDados() {
    let nomeDigitado = document.getElementById('nome').value;
    let notaDigitada = document.getElementById('nota').value;
   
    try {
        if (Number(nomeDigitado) || nomeDigitado === '') {
            throw 'Nome é inválido'
        } if (isNaN(notaDigitada) || notaDigitada === '') {
            throw 'Nota é inválido'
        }
        if (isNaN(nomeDigitado) && Number(notaDigitada)) {
            
        }
} catch (error) {
    resultado.innerHTML = error;
}
finally {
    document.getElementById('nome').value = '';
    document.getElementById('nota').value = '';
}
}