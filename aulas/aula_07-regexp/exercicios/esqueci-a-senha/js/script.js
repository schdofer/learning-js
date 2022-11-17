
function cadastrarCpf(){
    // substituir o cpf por *
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const substituiCpf = cpf.replace(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, '***.***.***-**');
    const substituiEmail = email.replace(/^(\w_+)@\w+(\.\w{2,3}){1,2}$/, 'seu email')

    console.log(substituiEmail)
}