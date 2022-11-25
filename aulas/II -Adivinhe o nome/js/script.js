var nomes = ['Tiago', 'Fernando', 'Naty', 'Francisco', 'Franco', 
             'Bruna', 'Rejane', 'Jessica', 'Sabrina', 'Janaina'];

function tela(tipo){
    let abertura = document.getElementById('abertura');
    let exercicio = document.getElementById('exercicio');
    let resolucao = document.getElementById('resolucao');
    let resultado = document.getElementById('resultado_sorteio');

    if (tipo == 0) then
       mudatela('none', 'inline', 'inline', 'none');

   function mudatela(telaabertura, telaexercicio, telaresolucao, telaresultado) {
        abertura.style.display = telaabertura;
        exercicio.style.display = telaexercicio;
        resolucao.style.display = telaresolucao;
        resultado.style.display = telaresultado;
   }
}

function sortear(){
    let radio = document.querySelector('input[name="nome"]:checked');
    let botao = document.getElementById('button_sortear');
    let resultado = document.getElementById('resultado_sorteio');

    if (botao.value == 'SORTEAR'){
        if (radio == null){
            alert('Nenhum nome selecionado! Selecione um para participar.') 
            return false;
        }

        botao.value = 'NOVO SORTEIO';
        sortearnome(radio.value);
    }
    else {
        botao.value = 'SORTEAR';
        resultado.innerHTML = '';
        resultado.style.display = 'none';
    }

    function sortearnome(radio){
       let valor = 0;
       for (let i = 0; i< 50; i++){
           valor = Math.floor((Math.random() * 9) + 1);
       }     
    
       resultado.style.display = 'flex';

       resultado.innerHTML = 'Nome sorteado: ' + nomes[valor];   

       if (radio == valor){
          resultado.innerHTML += '  -- PARABÉNS VOCÊ GANHOU';
          resultado.style.backgroundColor = 'green';
        }
       else{
          resultado.innerHTML += '  -- TENTE DE NOVAMENTE';
          resultado.style.backgroundColor = 'red';
        }
    }
}