function compararTexto() {
    const texto1 = document.getElementById('texto1').value;
    const texto2 = document.getElementById('texto2').value;
    const comparacao = texto1.localeCompare(texto2, 'pt', { sensitivity: 'base' });
    // texto1 a ser comparado com o texto 2 / linguagem / opções (base = trata dois caracteres como equivalentes á = a =A)
    //A opção accent = não diferencia os acentos. a = A ≠ á
    // retorna -1 se classificada antes // 0 se equivalente // 1 se for classificada depois
    //console.log(comparacao);
    try {
        if (!texto1 && !texto2) throw `Digite um texto válido`

        if (comparacao === 0) return resultado.innerHTML = ` "${texto1}" é equivalente à "${texto2}"`;
        //para trocar a cor do texto equivalente ?

        else return resultado.innerHTML = ` "${texto1}" não é equivalente à "${texto2}" `;

    }
    catch (error) {
        resultado.innerHTML = error;
    }
    finally {
        document.getElementById('texto1').value = '';
        document.getElementById('texto2').value = '';
    }

}