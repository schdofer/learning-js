(function informeNomeAluno() {
    const nomeAluno = window.prompt("Qual nome do aluno?");

    if (!nomeAluno) {
        window.alert('Você precisa informar o nome do aluno para avançar.')
        return informeNomeAluno();
    }

    document.getElementById('subtitle')
        .innerHTML = `Aluno selecionado: ${nomeAluno}`;

    informeAsNotas();
})();

function informeAsNotas() {
    const nota1 = window.prompt('Inform a primeira nota de 0 a 10:');
    if (!nota1) {
        window.alert('Nota 1 deve ser informada.');
        return informeAsNotas();
    }

    formataEstiloNota('nota-1', 'Nota primeira prova: <br />', nota1);

    const nota2 = window.prompt('Informe a segunda nota de 0 a 10:');
    if (!nota2) {
        window.alert('Nota 1 deve ser informada.');
        return informeAsNotas();
    }

    formataEstiloNota('nota-2', 'Nota segunda prova: <br />', nota2);
    calculaMedia(nota1, nota2);
}

function formataEstiloNota(id, message, nota) {
    const notaElement = document.getElementById(id);
    let classNota = foiAprovado(nota);
    
    notaElement.innerHTML = `
            ${message}
            <span class="nota ${classNota}">${nota}</span>
        `;
}

function foiAprovado(nota) {
    if (nota >= 7) {
        return 'aprovado';
    } else if (nota < 7) {
        return 'reprovado';
    }
}

function calculaMedia(nota1, nota2) {
    const media = ((nota1 * 1) + (nota2 * 2)) / 3;
    const classNota = foiAprovado(media);
    const resultadoBox = document.getElementById('resultado-final');

    const resultadoTitulo = document.createElement('h3');
    resultadoTitulo.setAttribute('class', 'subtitle');
    resultadoTitulo.innerHTML = `Resultado Final:`;

    const resultadoTexto = document.createElement('p');
    resultadoTexto.innerHTML = `
            ${(media >= 7) ? 'Parabéns, você foi aprovado!' : 'Infelizmente você foi reprovado.'} <br />
            Sua média final foi:
            <span class="nota ${classNota}">${media}</span>
        `;

    resultadoBox.appendChild(resultadoTitulo);
    resultadoBox.appendChild(resultadoTexto);
}