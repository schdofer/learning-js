let nome = [];
let nota = [];

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
            for (let i = 0; i <= nome.length && i <= nota.length; i++)
            nome.push(nomeDigitado);
            nota.push(notaDigitada);
        }
    } catch (error) {
        resultado.innerHTML = error;
    }
    finally {
        document.getElementById('nome').value = '';
        document.getElementById('nota').value = '';
    }
}


function ganhador(){
   let maiorNumero = console.log(Math.max.apply(null, nota))
   for (let i = 0; i< nota.length; i++){
    if (maiorNumero === nota[i]){
console.log(nota[index])
    }
   }



}