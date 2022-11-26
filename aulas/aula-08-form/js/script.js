function salvarComOnClick (){
    const text = document.getElementById("text");
    const password = document.getElementById("password");
    const form = document.getElementById("form");
    const checkbox = document.getElementById("checkbox");
    const radio = form.radio; //pega dentro do formulário o elemento com o "name" = rádio, ai não precisa pegar um por um no id
    console.log('form:', form);

    console.log('Salvando com onclick...', text, password, checkbox, radio);
}


function salvarComOnSubmit(element){
//Para passar o formulário inteiro

    const form = document.getElementById("form");
    
    console.log('Salvando com On submit...', form);

    console.log('form:', form);

    console.log('Element:', element);

    window.alert('travando a tela');
}