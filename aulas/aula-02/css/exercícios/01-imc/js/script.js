// DOM = Document Object Model (representa o documento HTML)


function calcularIMC() {
    //obter os elementos da tela (input de dados)
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    //validação dos dados de entrada
    if (!peso) {
        return feedback(resultado, 'erro', 'Peso deve ser informado.');
    }
    if (!altura) {
        return feedback(resultado, 'erro', 'Altura deve ser informada.');
    }
    //realizar calculo
    const imc = peso / (altura * altura);

    //Apresentação do resultado
    return feedback(resultado, 'sucesso', imc);
}


function feedback(elemento, tipo, mensagem) {
    if (tipo == 'erro') {
        elemento.classList.remove('sucesso');
        elemento.classList.add('erro');
        elemento.innerHTML = `
            <p>${mensagem}</p>
        `;
    } else {
        elemento.classList.remove('erro');
        elemento.classList.add('sucesso');
        elemento.innerHTML = `
            <p>Resultado: ${mensagem}</p>
        `;
    }
}
