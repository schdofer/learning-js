// DOM = Document Objectg Model
// Representa o documento HTML
// Lembrar-se dos seletores do CSS

function calcularIMC() {
    //obter oso elemtnos da tela (input de dados)
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado')
    
    //Realizar calculo
    const imc = peso / (altura * altura)
    
    //Apresentação do resultado
    resultado.innerHTML =`
    Resultado IMC: ${imc}
    `
}