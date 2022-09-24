// Estudo sobre formas de definir variaveis
function variaveis() {
    const PI = Math.PI;
    if (true) {
        // Declaração das variáveis
        var a = 'A';  // é como um global dentro do escopo invisivel do JS
        let b = 'B';
        const c = 'C';
        // Alteraçã das variáveis
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
    const num = 123;  // Tipo number é um número
    const bool = true; // Tipo booleano é verdadeiro ou falso
    const un = undefined; // Tipo undefined é quando não foi definido

    console.log('TIPOS PRIMITIVOS:');
    console.log(str, typeof str);
    console.log(num, typeof num);
    console.log(bool, typeof bool);
    console.log(un, typeof un);
}

function tiposComplexos() {
    const func = function() {
        console.log('funcao');
    }
    const obj = {
        firstName: 'Fernando',
        lastName: 'Schneider da Cunha',
        idade: 36
    };

    console.log('TIPOS COMPLEXOS:');
    console.log(func, typeof func);
    console.log(obj, typeof obj);
}

function truthyAndFalsy() {
    // undefined é false
    // null é false
    // false é false
    // "" é false
    // NaN é false
    // 0 é false
    // TODO RSTO É AVALIADO COMO TRUE !
    let nome = 'Fernando';
    // Quero testar se nome está preenchido
    if(!nome) {
        console.log('Nome esta preenchido');
    } else {
        console.log('Nome está vazio');
    }
}
