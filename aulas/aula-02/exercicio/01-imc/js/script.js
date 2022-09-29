function calcularIMC (){
    //obter os elementos da tela - input
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if(!peso && !altura){
        resultado.innerHTML = `ERRO: Peso e ou altura não informada!`
        return;
    }

    //realizar calculo 
    const imc = peso / (altura * altura);

    // apresentar o resultado

    resultado.innerHTML = `RESULTADO: ${imc}`;

    console.log(peso, altura);
}