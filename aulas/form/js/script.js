function salvarComonclick(button){
    const form = document.getElementById("form");
    const text = document.getElementById("text");
    const password = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const radio = form.radio;
     
    console.log('Salvando com on click', text, password, checkbox, radio);
}

function salvarComOnSubmit(element){
    const form = document.getElementById("form");
     
    console.log('Salvando com on submit');
    console.log('form: ', form);
    console.log('element: ', element);
    window.alert('travando a tela');
}