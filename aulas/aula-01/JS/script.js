function variaveis() {
    const PI = Math.PI;

    if (true) {
        // Declaração das variáveis.
        var a = 'A';
        let b = 'B';
        const c = 'C';
        // Alteração das variáveis
        a = 'AA';
        b = 'BB';

        // Apresentação do resultado
        document.getElementById('resultado').innerHTML = `
        A: ${a} <br>
        B: ${b} <br>
        PI: ${PI}
    `;
    }
}

function tiposPrimitivos() {
    const str = 'Tipo String é um texto.';
    const num = 123;
    const bool = true;
    const un = undefined;

    console.log('TIPOS PRIMITIVOS');
    console.log(str, typeof str);
    console.log(num, typeof num);
    console.log(bool, typeof bool);
    console.log(un, typeof un);
}

function tiposComplexos (){

    const func = function() {
        console.log('funcao');
    } 
    const obj = {
        nome: 'Franco',
        idade: '24'
    };

    console.log('TIPOS COMPLEXOS');
    console.log(func, typeof func);
    console.log(obj, typeof obj);

}
function TruthyAndFalsy(){
// undefined é false
// null é false
// false é false
// '' é false () string vazia é false
// NaN é false
// 0 é false
// Todo o resto é avaliado como TRUE.

    let nome = '';
    // Quero testar se nome está preenchido
    if(nome){
        console.log ('Nome está preenchido');
    } else {
        console.log ('nome está vazio');
    }

}