// DOM = Document Object Model
// Representa o documento HTML
// Lembrar-se dos seletores CSS

function calcularIMC() {
    // Obter os elementos da tela (input de dados)
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
    const REGEX = /^\d{1,3}\.?\d{0,3}$/;

    if (!peso || !altura)
        return feedbackMessage(resultado, 'erro', 'OPs, ocorreu um erro!', 'Peso e altura devem ser informados!');
    
    if (!REGEX.test(peso) || !REGEX.test(altura))
        return feedbackMessage(resultado, 'erro', 'OPs, ocorreu um erro!', 'Peso e altura devem ser valores numéricos!');

    // Realizar calculo
    const imc = peso / (altura * altura);

    let msg;
    if (imc < 19.5)
        msg = 'Abaixo do peso.';
    else if (imc >= 18.5 && imc < 25)
        msg = 'Peso normal.';
    else if (imc >= 25 && imc < 30)
        msg = 'Sobrepeso.';
    else if (imc >= 30 && imc < 35)
        msg = 'Obesidade grau I.';
    else if (imc >= 35 && imc < 40)
        msg = 'Obesidade grau II (severa).';
    else if (imc >= 40)
        msg = 'Obesidade grau III (mórbida).';

    // Apresentação do resultado
    return feedbackMessage(resultado, 'sucesso', 'Resultado do seu IMC', msg);
}


function feedbackMessage(element, type, title, message) {
    const content = `
        <h3>${title}</h3>
        <br />
        <p>${message}</p>
    `;

    if (type == 'erro') {
        element.classList.remove('sucesso');
        element.classList.add('erro');
    } else if (type == 'sucesso') {
        element.classList.remove('erro');
        element.classList.add('sucesso');
    }
    element.innerHTML = content;
}


