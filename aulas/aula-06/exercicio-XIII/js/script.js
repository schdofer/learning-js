function campos_default(){
    //document.getElementById('fidade').value = today.toDateString().substr(0, 10);
    document.getElementById('fnome').value = '';    
}

function tecla(event){
    let evt = event.keyCode;
    if (evt == 13) 
        coloca_lista();
}


function coloca_lista(){
    let nome = document.getElementById('fnome').value.trim();
    let lista_festa = document.getElementById('lista-festa');

    if (!nome){
       alert('Nome não informado ');
       return false;
    }

    lista_festa.style.display = 'block';

    let nome_lista = document.getElementById('nome-lista');
    var div_nome = document.createElement("div");
    div_nome.innerHTML = nome;
    nome_lista.appendChild(div_nome);

    let idade_lista = document.getElementById('idade-lista');
    var div_idade = document.createElement("div");
    div_idade.innerHTML = '18';
    idade_lista.appendChild(div_idade);    

    campos_default();
}


