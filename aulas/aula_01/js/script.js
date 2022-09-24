// 

function variaveis() {
    // estudo sobre formas de definir variáveis
    const PI = Math.PI;
    if (true) {
        //definição das variáveis
        var a = 'A'; //não respeita o escopo do bloco, ele por padrão é definido como um global dentro do escopo
        let b = 'B'; //respeita apenas o escopo do bloco em que foi definido, dar preferência de uso para ele.
        const c = 'C'; //variável que não pode ser alterada
        // alteração das variáveis
        a = 'AA'
        b = 'BB'
        // c = 'CC'

        // apresentação do resultado
        document.getElementById('resultado').innerHTML = `
        
        <span class='destaque'>Resultado "impresso" no HTML</span> <br><br>

         A: ${a} <br> <hr>
         B: ${b} <br><hr>
         PI: ${PI} <hr>
         `;
    }
}

function tiposPrimitivos() {
    const str = 'Tipo String é um texto!';
    const num = 123; //tipo number é um número
    const bool = true; //tipo booleano é verdadeiro ou falso
    const un = undefined; //tipo undefined é quando não foi definido

    console.log('TIPOS PRIMITIVOS');
    console.log(str, typeof str); //typeof vai dizer o tipo de operador
    console.log(num, typeof num);
    console.log(bool, typeof bool);
    console.log(un, typeof un);
}

function tiposComplexos() {

    const func = function () {
        console.log('funcao');
    }

    const obj = {
        nome: 'Natalia',
       idade: 32

    }
    console.log('TIPOS COMPLEXOS');
    console.log(func, typeof func);
    console.log(obj, typeof obj)
}

function truthyAndFalsy() {
let nome = 'Fernando';

//quero testar se nome está preenchido

if(!nome){
// undefined é false
// null é false
// false é false
// '' é false
// NaN é false
// 0 é false
// Todo o resto é avaliado como true !

console.log('Nome está preenchido');
}
else {
    console.log('Nome está vazio');
}
}