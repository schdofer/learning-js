// verificação de senha
// Deve conter pelo menos um dígito numérico
// Deve contar pelo menos uma letra minúscula
// Deve conter pelo menos uma letra maiúscula
// Deve conter pelo menos um simbolo especial entre: $_.!#%&*()[]{}^~
// Deve conter no mínimo 8 caracteres


function testarRegex() {
    let senha1 = document.getElementById('senha1').value;
let senha2 = document.getElementById('senha2').value;
let regExp = /^(?=.*[$_\.!#%&\*()[\]{}\^~])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$_\.!#%&\*()[\]{}\^~])[0-9a-zA-Z$_\.!#%&\*()[\]{}\^~]{8,}$/
if (senha1===senha2){
    try {
        if (senha1 === regExp) {
            return resultado.innerHTML = `nova senha cadastrada com sucesso`
        }
        else if (senha1 != regExp) {
            throw resultado.ineerHTML = `Senha fraca`
        }
    }
    catch (error) {
        resultado.innerHTML = error;
    }
    finally {
        document.getElementById('senha1').value = ''
        document.getElementById('senha2').value = ''
    }
}
else {
    resultado.innerHTML = `As senhas são diferentes`
}
}



//Não casa caracteres na posição atual, mas dá uma "espiada" adiante, e caso a ER embutida case, retorna sucesso.
//	Matches any string that is followed by a specific string n
// Pense que cada máscara entre parênteses é uma varredura individual em que o resultado da varredura deve ser TRUE quando fizer o match desejado.
// A próxima máscara adicionada quase garante que todos os caracteres do texto sejam letras e números apenas. Sim, eu disse quase, mas ainda temos que garantir que a combinação desejada seja validada do início ao fim do texto, caso contrário as extremidades (bordas) do texto poderão conter caracteres indesejadados.
//Agora sim, o acento circunflexo ˆ garante que a validação vai ser realizada a partir do primeiro caracter da senha e o dólar $ garante que a combinação desejada será feita até o último caracter da senha.

