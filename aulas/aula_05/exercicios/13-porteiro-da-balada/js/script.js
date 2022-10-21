function verificarIdade() {
    let nome = document.getElementById('nome').value;
    let nascimento = document.getElementById('nascimento').value;
    let ano = nascimento.split('-');
    let anoAtual = 2022;
    let idade = anoAtual - ano[0];

    try {
        if (nome === '' || Number(nome) || nascimento === '') {
            throw  'Dados inválidos';
        }
        if (isNaN(nome) || Number(nascimento)) {
            if (idade >= 18) {
                return resultado.innerHTML = ` ${nome} você tem mais de 18 anos, pode entrar na festa!
            `;
            } else {
                return resultado.innerHTML = ` ${nome} você tem ${idade} anos, você é menor de idade, não poderá entrar na festa!
                <br>
                <img src="https://img.icons8.com/emoji/256/no-one-under-eighteen-emoji.png" alt="placa de menor de idade">`;
            }
        }
    }
    catch (error){
        resultado.innerHTML = error;
    }
    finally {
        document.getElementById('nome').value = '';
        document.getElementById('nascimento').value = '';
    }
}