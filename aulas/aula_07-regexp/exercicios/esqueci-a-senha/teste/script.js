function cadastrarSenha() {
    let senha1 = document.getElementById('senha1').value;
    let senha2 = document.getElementById('senha2').value;
    let regExp = /^(?=.*[$_\.!#%&\*()[\]{}\^~])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$_\.!#%&\*()[\]{}\^~])[0-9a-zA-Z$_\.!#%&\*()[\]{}\^~]{8,}$/;
    let confereSenha = regExp.test(senha1, senha2);
    console.log(confereSenha);
    if (senha1 === senha2) {
        try {
            if (confereSenha === true) {
               alert("Nova senha cadastrada");
            }
            else if (confereSenha  === false) {
                throw alert("Sua senha deve ter todos requisitos");
            }
        }
        catch (error) {
            resultado.innerHTML = error;
        }
        finally {
            document.getElementById('senha1').value = '';
            document.getElementById('senha2').value = '';
        }
    }
    else {
        alert("As senhas devem ser iguais");
    }
}



//Não casa caracteres na posição atual, mas dá uma "espiada" adiante, e caso a ER embutida case, retorna sucesso.
//	Matches any string that is followed by a specific string n
// Pense que cada máscara entre parênteses é uma varredura individual em que o resultado da varredura deve ser TRUE quando fizer o match desejado

