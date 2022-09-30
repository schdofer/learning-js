// DOM = Document Objectg Model
// Representa o documento HTML
// Lembrar-se dos seletores do CSS

function calcularIMC() {
    //obter os elementos da tela (input de dados)
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado')

    if (!peso || !altura) {
        resultado.classList.remove('sucesso');
        resultado.classList.add('erro');
        resultado.innerHTML = `
        ⚠ Erro: Peso e altura devem ser informados!
        `;
        return;
    }

    //Realizar cálculo
    const imc = peso / (altura * altura)

    //Apresentação do resultado
    resultado.classList.remove('erro');
    resultado.classList.add('sucesso');

    if (imc < 18.5) {
        resultado.innerHTML = `
        Resultado IMC: ${imc} <br>Você está abaixo do peso.
        `;
    } else if (imc >= 18.5 && imc < 25) {
        resultado.innerHTML = `
        Resultado IMC: ${imc} <br>Seu peso está dentro da faixa normal.
        `;
    } else if (imc >= 25 && imc < 30) {
        resultado.innerHTML = `
        Resultado IMC: ${imc} <br>Você está com sobrepeso.
        `;
    } else if (imc >= 30 && imc < 35) {
        resultado.innerHTML = `
        Resultado IMC: ${imc} <br>Você está com obesidade grau I.
        `;
    } else if (imc >= 35 && imc < 40) {
        resultado.innerHTML = `
        Resultado IMC: ${imc} <br>Você está com obesidade grau II (severa).
        `;
    } else {
        resultado.innerHTML =
            'Resultado IMC:' + imc + '<br>Você está com obesidade grau III(mórbida).'; //outra forma de escrever concatenando variável e string.
    }
}