// DOM = Document Object Model (representa o documento HTML)


function calcularIMC() {
    //obter os elementos da tela (input de dados)
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
    
    //realizar calculo
    const imc = peso / (altura*altura);

    //Apresentação do resultado
    console.log (imc);
}
