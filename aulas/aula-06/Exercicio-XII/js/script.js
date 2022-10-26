function teste() {
    const resul = document.getElementById('resultado');
    let descricao = document.getElementById('descricao').value;
    let b = '';

    for (let i = descricao.length-1; i >= 0; i--) { 
        b += descricao[i];
    }    

    if (!descricao)
       mensagem(resultado, 'OK', 'A PALAVRA NÃO FOI INFORMADA','blue'); 
    else if (descricao == b)
       mensagem(resultado, 'OK', 'A PALAVRA É UM PALÍNDROMO','green');
    else
       mensagem(resultado,'ERROR', 'A PALAVRA NÃO É UM PALÍNDROMO', 'red');

    function mensagem(element, type, mensagem, color){
        element.style.display = 'flex'
        element.style.backgroundColor = color;
        element.innerHTML = mensagem;
    }
}
