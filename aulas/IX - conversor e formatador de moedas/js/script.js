function converte(moeda) {
    const valor = document.getElementById('valor_real').value;

    if (valor==''){
        alert('Valor informado invalido');
        return false;
    }
    
    let url = '';
    let data = new Date();
    let datadia = (data.getMonth() + '-'+ data.getDay() + '-' + data.getFullYear());
    
    switch (moeda) {
        case 'Dolar':
        {    
            url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=" + datadia + "&$format=json";
            break;
        }
        case 'Euro':
        {
            url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$skip=0&$filter=EURO&$format=json";
        }
        case 'Libras':
        {

        }
    };
    
    let request = new XMLHttpRequest();
    
    request.open('GET', url , true );
    request.send();
    
    console.log(request.responseText);
    request.onload = function(){

        if (request.readyState == 4 && request.status == 200){
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
        else{

        }

    }
};

