
function cadastrarCpf(){
//para pegar o valor do texto
    const cpf = document.getElementById('texto').value;
    // expressão regular para o cpf
    const regexCpf = /\d{3}\.\d{3}\.\d{3}-\d{2}/g
    // expressão regular para o email
    const regexEmail = /[\w_\.-]+@\w+(\.\w{2,3}){1,2}/g
    // para substituir primeiro o cpf e me retornar o texto com os ***
const substituiCpf = cpf.replace(regexCpf, '***.***.***-**')
// para pegar o texto com o cpf substituido e retornar ele com o e-mail também substituido
const substituiEmail = substituiCpf.replace(regexEmail, 'Dado oculto')
// imprimir no console para ver se deu certo
    console.log(substituiEmail)

    imprimeTexto.innerHTML = substituiEmail

}