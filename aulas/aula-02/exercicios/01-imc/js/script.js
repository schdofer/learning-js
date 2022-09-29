// DOM = Document Object Model
// Representa o documento HTML
// Lembrar-se dos seletores CSS

function calcularIMC() {
    // Obter os elementos da tela (input de dados)
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if(!peso || !altura) {
        resultado.classList.remove('sucesso');
        resultado.classList.add('erro')
        resultado.innerHTML = `
            ERRO: Peso e altura devem ser informados!
        `;
        return;
    }

    // Realizar calculo
    const imc = peso / (altura * altura);

    // Apresentação do resultado
    resultado.classList.remove('erro');
    resultado.classList.add('sucesso')
    resultado.innerHTML = `
        RESULTADO: ${imc}
    `;
}

