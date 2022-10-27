function enviarDados() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let email = document.getElementById('email').value;
    // console.log(nome);
    // console.log(idade);
    // console.log(email);
    try {
        if (!nome || parseInt(nome[0])) { //nome é vazio e nome é um número
            throw 'Nome inválido'
        }
        if (!idade || isNaN(idade)) { //idade é vazio e idade "is not a number"
            throw 'Idade é inválido'
        }
        if (!email || parseInt(email[0])) { // email vazio e email com a primeira letra com número
            throw 'E-mail é inválido'
        }
        if (nome && idade && email) {
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