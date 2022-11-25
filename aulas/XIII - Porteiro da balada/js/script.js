let lista_pessoas = [];

function campos_default(){    
    document.getElementById('fidade').value = '';
    document.getElementById('fnome').value = '';    
}

function tecla(event){
    let evt = event.keyCode;
    if (evt == 13) 
        coloca_lista();
}

function lista(nome, idade){
    let lista_festa = document.getElementById('lista-festa');
    lista_festa.style.display = 'block';
    let nome_lista = document.getElementById('nome-lista');
    var div_nome = document.createElement("div");
    div_nome.innerHTML = nome;
    nome_lista.appendChild(div_nome);

    let idade_lista = document.getElementById('idade-lista');
    var div_idade = document.createElement("div");
    div_idade.innerHTML = idade;
    idade_lista.appendChild(div_idade);    

    lista_pessoas.push(   { "nome" : nome,
                            "idade" : idade
                          }
                      );
}

function coloca_lista(){
    let nome = document.getElementById('fnome').value.trim().toUpperCase();
    let nascimento = new Date(document.getElementById('fidade').value);

    if (!nome){
        alert('Nome não informado ');
        return false;
    }
    if (! nascimento instanceof Date){
        alert('Data informada inválida');
        return false;
    } 

    let resultado = lista_pessoas.find(pesquisa => pesquisa.nome == nome );
    if (resultado && resultado.nome == nome){
        alert('Nome já informado');
        return false;
    }
    
    let data_dia = new Date();

    const diff = Math.abs(data_dia.getTime() - nascimento.getTime()); 
    const idade =Math.trunc(diff / (1000 * 60 * 60 * 24 * 365));

    if (idade < 18) {
        alert('Menor de idade ' + idade +  ' anos - PROIBIDA A ENTRADA');
        return false;
    }

    lista(nome, idade);

    campos_default();
}


