//function declaration , pode estar em qualquer lugar
function soma(x,y){
    return x+y;
}

//function expression  tem q estar a cima
let subtrai = function(a,b){
    return a-b;
}

//named funciton expression , tem q estar a cima
let multiplica = function multiplica(a,b){
    return a*b;
}

//arrow function 
let divide = (x,y) => (x/y);
let modulo = (x,y) => (x%y);


console.log('Soma: ' , soma(1,2));
console.log('subtrai: ', subtrai(5,4));
console.log('multiplica: ', multiplica(3,2));
console.log('divide: ', divide(8,2));
console.log('modulo: ', modulo
(9,2));

//Patterns
function criarpessoa(nome, sobrenome ){
    return {
        nome: nome, 
        sobrenome: sobrenome
    };
}

let franco = criarpessoa('franco',  'Cunha');
let tiago  = criarpessoa('tiago',   'werenicz');
let nati   = criarpessoa('Natalia', 'schmidt');

console.log(franco, tiago, nati);

//função construtora que simula uma classe
let Pessoa = function(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

let fernando = new Pessoa('fernando',  'Cunha');
console.log(fernando);

function toggle() {
    const box= document.getElementById('box');
    box.classList.add('show');
    box.classList.remove('hide');
    console.log(box);
}






