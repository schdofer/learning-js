// Estudo sobre formas de definir variaveis
function variaveis(){
    const PI = Math.PI;

    if(true){
        var a ='A';  //le como um global dentro do escopo invisivel
        let b = 'B';
        const c = 'C';
        
        a = 'AA';
        b = 'BB';
        
        document.getElementById('resultado').innerHTML = `
             A: ${a} <br>
             b: ${b} <br> 
             PI: ${PI}
        `;
                            

        console.log('A:',a);
        console.log('B:',b);
        console.log('PI:',PI);
    }   
}

function tiposprimitivos(){
    const str = 'tipo String é um texto'; 
    const num = 123; // tipo number é um numero
    const bool = true; // tipo booleano é verdade ou falso
    const un = undefined; //tipo unidefined é quando nao foi definido

    console.log('TIPOS PRIMITIVOS');
    console.log(str,typeof str);
    console.log(num , typeof num);
    console.log(bool, typeof bool);
    console.log(un, typeof un);

}

function tiposcomplexos() {
    const func = function() {
        console.log('função');
    }

    const obj = {
          nome:'fernando',
          idade:36
    };

    console.log('TIPOS COMPLEXOS');
    console.log(func, typeof func);
    console.log(obj, typeof obj);
}

function truthyAndFalsy() {
    //undefined é false
    //null é false
    //false é false
    //string vazia é false
    //Nan é false
    //0 é false 
    //todos o resto é true

    let nome = '';
    //quero testar se nome esta preenchido

    if(nome){
        console.log('Nome esta preenchido');
    } else {
        console.log('Nome esta vazio'); 
    }
}




