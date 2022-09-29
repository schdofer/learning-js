
// function declaration
function soma(x, y) {
    return x + y;
}

// function expression
let subtrai = function(a, b) {
    return a - b;
}

// named function expression
let multiplica = function multiplica(a, b){
    return a*b;
}

// arrow function
let divide = (x, y) => (x/y); 

console.log( soma (1,2) );
console.log( (3,2) );
console.log(multiplica(3,2));
console.log(divide(8,2));


// Patters

//Funcão fábrica
function criarPessoa (nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    };
}

// função construtora que simula uma classe (e ao representar uma classe a letra deverá ser maiúscula)
let Pessoa = function(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

let fernando = new Pessoa ('Fernando', 'Cunha');

let franco = criarPessoa ( 'Franco', 'Schneider');
let francisco = criarPessoa ( 'Francisco', 'Cunha');
let felipe = criarPessoa ( 'Felipe', 'Cunha');

console.log (franco, francisco, felipe, fernando);



function toggle() {
    const box = document.getElementById('box');
    box.classList.remove('hide');
    box.classList.add('show');
    console.log(box);
}