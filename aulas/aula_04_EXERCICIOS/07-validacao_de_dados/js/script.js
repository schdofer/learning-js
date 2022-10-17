function enviarDados() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let email = document.getElementById('email').value;
    // console.log(nome);
    // console.log(idade);
    // console.log(email);
    try {
        if (nome === '' || Number(nome)) {
            throw 'Nome inválido'
        }
        if (idade === '' || isNaN(idade)) {
            throw 'Idade é inválido'
        }
        if (email === '' || Number(email[0])) {
            throw 'E-mail é inválido'
        }
        if (nome != Number(nome) && Number(idade) && email != '') {
            return resultado.innerHTML = 'Cadastro realizado com sucesso!<br>Nome: ' + nome + '<br>Idade: ' + idade + '<br>E-mail: ' + email; ''
        }

    }
    catch (error) {
        resultado.innerHTML = error;
    }
    finally {
        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
        document.getElementById('email').value = '';
    }
}