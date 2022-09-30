function calcularMedia() {
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const resultado = document.getElementById('resultado');

    //Para o calculo da média:
    //- Nota 1 tem peso 1
    //- Nota 2 tem peso 2
    const calculo = [(nota1 * 1) + (nota2 * 2)] / (1 + 2)
    const media = calculo.toFixed(2)

    //Para exibir o resultado
    if (media >= 7) {
        resultado.classList.add('aprovado');
        resultado.classList.remove('reprovado');
        resultado.innerHTML = `
    Sua média final foi: ${media}<br>Parabéns, você foi aprovado! 🎉
    `;
    } else {
        resultado.classList.add('reprovado');
        resultado.classList.remove('aprovado');
        //imprimindo no html de outra forma
        resultado.innerHTML = "Sua média final foi: " + media + "<br>Infelizmente você foi reprovado. 😕 ";
    }
}