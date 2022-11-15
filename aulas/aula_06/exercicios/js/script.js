let nome = document.getElementById("nome").value;
let cpf = document.getElementById("cpf").value;
let idade = document.getElementById("idade").value;
let telefone = document.getElementById("telefone").value;
let email = document.getElementById("email").value;

function realizarCadastro(){
    this.nome = nome;
    this.cpf = cpf;
    this.idade = document.getElementById("idade").value;
    this.telefone =document.getElementById("telefone").value;
    this.email = document.getElementById("email").value;

    let cadastro = new Cadastro(nome, cpf, idade, telefone, email)
    console.log(cadastro)
}