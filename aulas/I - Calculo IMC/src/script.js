function calcular(){
    let exe = document.getElementById('exercicio');
    let res = document.getElementById('resolucao');
    let imc = document.getElementById('imc');

    let img = document.getElementById('img');
    let mensagem = document.getElementById('resultado');

    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    
    if (isNaN(peso)) {
       alert('Peso informado invalido');
       return false;
    };

    if (isNaN(altura)) {
        alert('Altura informada invalida');
        return false;
     };

    if (! teste(peso, altura)){
        alert('Peso e/ou altura não informado(s)');
        return false;
    }
    
    let imc_calculo = (peso / ((altura * altura) )).toFixed(2);

    if (imc_calculo < 18.5)
    {       
        img.style.background = `url('img/1.png')  no-repeat center center`;
    } else if (imc_calculo >= 18.5 && imc_calculo <= 24.9)
    {
       img.style.background = `url('img/2.png')  no-repeat center center`;
    } else if (imc_calculo >= 25 && imc_calculo <= 29.9)
    {
       img.style.background = `url('img/3.png')  no-repeat center center`;       
    }  else if (imc_calculo >= 30 && imc_calculo <= 34.99)
    {
       img.style.background = `url('img/4.png')  no-repeat center center`;       
    }  else if (imc_calculo >= 35 && imc_calculo <= 39.99)
    {
       img.style.background = `url('img/5.png')  no-repeat center center`;       
    } else
    {
        img.style.background = `url('img/6.png')  no-repeat center center`;         
    }

    mensagem.innerHTML = 'SEU IMC É: ' + imc_calculo;
    
    tela(exe, res, imc, 'none', 'none', 'inline', peso, altura);
}    

function fechar(){
    let exe = document.getElementById('exercicio');
    let res = document.getElementById('resolucao');
    let imc = document.getElementById('imc');

    tela(exe, res, imc, 'inline', 'inline', 'none', peso, altura);
}

function tela(obj1, obj2, obj3, div1, div2, div3, peso, altura){
     obj1.style.display = div1;
     obj2.style.display = div2;
     obj3.style.display = div3;

     peso.value = '';
     altura.value = '';
}

function teste(peso, altura)
{   
    if (!peso){
        return false;
    } 
    else if(!altura){
       return false;
    } 
    else 
    {
       return true;
    }   

}