console.log(soma(1, 2));
// console.log(subtrai(3, 2));
// console.log(multiplica(2, 3));

// Function Declaration -  a declaração da função pode estar embaixo e a chamada dela em cima que irá funcionar

function soma(x, y) {
    return x + y;
}

//function Expression - a declaração precisa estar acima da utilização (console log abaixo dela no exemplo)
let subtrai = function (a, b) {
    return a - b;
}


// Named | Function Expression - a declaração precisa estar acima da utilização (console log abaixo dela no exemplo)
let multiplica = function multiplica(a, b) {
    return a * b
}

//Arrow Function - ultizado no callback, tb precisa estar declarada acima da execução
let divide = (x, y) => (x / y);



// console.log(soma(1, 2));
console.log(subtrai(3, 2));
console.log(multiplica(2, 3));
console.log(divide(8, 2));


//Paterns (padrão de projeto)
//Função fábrica
function criarPessoa(Nome, Sobrenome) {
    return {
        Nome,
        Sobrenome
    };
}
let franco = criarPessoa('Franco', 'Schneider');
let tiago = criarPessoa('Tiago', 'Werenicz');
let naty = criarPessoa('Natalia', 'Schmidt');



//Função construtora que simula uma classe (uma entidade que da orientação a um objeto),
//classes são representadas com letra maiuscula (no exemplo o Pessoa).
let Pessoa = function (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

let fernando = new Pessoa('Fernando', 'Cunha')

console.log(franco, tiago, naty, fernando);

function toggle() {
    const box = document.getElementById('box');
    box.classList.remove('hide')
    box.classList.add('show')
    console.log(box);
}
