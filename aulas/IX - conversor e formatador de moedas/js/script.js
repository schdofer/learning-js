function converte(moeda) {
    const valor = document.getElementById('valor_real').value;

    if (valor==''){
        alert('Valor informado invalido');
        return false;
    }
    
    let url = '';
    let data = new Date();
    let datadia = ((data.getMonth()+1) + '-'+ data.getDate() + '-' + data.getFullYear());
    
    switch (moeda) {
        case 'Dolar':
        {    
            url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='" + datadia + "'&$format=json";
            break;
        }
        case 'Euro':
        {
            url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='EUR'&@dataCotacao='" + datadia + "'&$top=1&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao";
        }
        case 'Libras':
        {
            url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='GBP'&@dataCotacao='" + datadia + "'&$top=1&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao";
        }
    };
    
    let request = new XMLHttpRequest();
    
    request.open('GET', url , true );
    request.send();
    
    request.onload = function(){
      
      try{
           console.log(request);
           if (request.status != 200)
               throw new Error(request.status);
  
           let resposta = JSON.parse(request.responseText);
           
           let valores = resposta.value[0];

           document.getElementById('compra_tipo').innerHTML = 'COMPRA: ' + moeda;
           document.getElementById('venda_tipo').innerHTML = 'VENDA: ' + moeda;

           let venda_tipo = document.getElementById('compratotal');

           let compradia = document.getElementById('compradia');
           let compratotal = document.getElementById('compratotal');

           compradia.innerHTML = 'Valor dia: ' + valores.cotacaoCompra;
           compratotal.innerHTML = 'Total: ' + (valor / valores.cotacaoCompra).toFixed(2);

           document.getElementById('vendadia').innerHTML = 'Valor dia: ' + valores.cotacaoVenda;
           document.getElementById('vendatotal').innerHTML = 'Total R$: ' + (valor * valores.cotacaoCompra).toFixed(2);
 
           console.log('compra: ' , valores.cotacaoCompra);
           console.log('venda: ' , valores.cotacaoVenda);
           console.log('hora: ' ,valores.dataHoraCotacao);
        }
        catch(error){
            console.log(error); 
            alert('Erro de comunicação: ' + error.message);
        }
    }
};

