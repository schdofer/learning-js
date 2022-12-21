const btn = document.querySelector('#btn');
btn.addEventListener('click', cliqueBtn);

const btn2 = document.querySelector('#btn-2');
btn2.addEventListener('click', cliqueBtn2);

const btnSalvar = document.getElementById('salvar')
btnSalvar.addEventListener('click', salvar)

const btnRemove = document.getElementById('remove-pessoas')
btnRemove.addEventListener('click', removePessoas)

let pessoas = [];

window.onload = loadPessoas; //depois que carregar toda a pagina ele vai disparar o manipular


function loadPessoas() {
    const pessoasString = localStorage.getItem('PESSOAS') //retornar o item da chave PESSOAS
    if (pessoasString){
    const lista = document.getElementById('lista')
    lista.innerHTML = pessoasString
    pessoas = JSON.parse(pessoasString) //para passar novamente para array com os elementos
}
}

function salvar() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const lista = document.getElementById('lista')

    const pessoa = {
        nome: nome,
        idade: idade,
    };
    pessoas.push(pessoa);

    lista.innerHTML = JSON.stringify(pessoas)
    localStorage.setItem('PESSOAS', JSON.stringify(pessoas)) //para transformar em string e salvar
}

function removePessoas() {
    const lista = document.getElementById('lista')
    //limpei o local storage para quando fechar o navegador nao carregar d enovo
    localStorage.removeItem('PESSOAS')
    //limpei array pessoas na memoria
    pessoas = []
    //limpei informacao apresentada ao usuario em tela
    lista.innerHTML = 'Lista vazia'
}

function cliqueBtn() {
    window.alert('Cliquei BTN');
    //btn2.click()

    // forçando o disparo do btn2
    const eventoDeClique = new MouseEvent('click');
    btn2.dispatchEvent(eventoDeClique)
}

function cliqueBtn2() {
    window.alert('Cliquei BTN 2');

    //criando e add seu proprio evento
    const input = document.getElementById('nome');
    const nome = input.value;

    input.addEventListener('franco', isFranco) //atrelando evento ao input
    input.addEventListener('tiago', isTiago)

    if (nome === 'franco') { //se o nome digitado no input for franco ele vai disparar o evento franco
        input.dispatchEvent(new Event('franco'))
    } else if (nome === 'tiago') {
        input.dispatchEvent(new Event('tiago'))
    }
}

function isFranco() {
    window.alert('é o Franco')
}

function isTiago() {
    window.alert('é o Tiago')
}
