
// Function declaration
function soma(x, y) {
    return x + y;
}

// Function Expression
let subtrai = function (a, b) {
    return a - b;
}

// Named Function Expression
let multiplica = function multiplica(a, b) {
    return a * b;
}

// Arrow Function
let divide = (x, y) => (x/y);

let modulo = (x, y) => (x%y);

console.log(soma(1, 2));
console.log(subtrai(3, 2));
console.log(multiplica(3, 2));
console.log(divide(8, 2));
console.log(modulo(9, 2));


// Patterns

// Função fábrica
function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    };
}

// Função construtora que simula uma classe
let Pessoa = function(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}


let fernando = new Pessoa('Fernando', 'Cunha');


let franco = criarPessoa('Franco', 'Schneider');
let tiago = criarPessoa('Tiago', 'Werenicz');
let naty = criarPessoa('Natália', 'Schmidt');

console.log(franco, tiago, naty, fernando);

function toggle() {
    const box = document.getElementById('box');
    box.classList.remove('hide');
    box.classList.add('show');
    console.log(box);
}




















