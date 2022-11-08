function comparar(){
    let texto1 = document.getElementById('ftexto1');
    let texto2 = document.getElementById('ftexto2');

    if (!texto1.value.trim() || !texto2.value.trim()){
        alert('Texto 1 e/ou Texto 2 não informados');
        texto1.placeholder = 'Obrigatório informar o texto';
        return false;
    }


    
    return true;
}