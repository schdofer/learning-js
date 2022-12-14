const btn = document.querySelector('#btn');
btn.addEventListener('click', cliqueBtn);

const btn2 = document.querySelector('#btn-2');
btn2.addEventListener('click', cliqueBtn2);



function cliqueBtn(){
    window.alert('Cliquei BTN');
    //btn2.click()

    // forçando o disparo do btn2
    const eventoDeClique = new MouseEvent ('click');
    btn2.dispatchEvent(eventoDeClique)
}

function cliqueBtn2(){
    window.alert('Cliquei BTN 2');

    //criando e add seu proprio evento
   const input = document.getElementById('nome');
   const nome = input.value;

   input.addEventListener('franco', isFranco) //atrelando evento ao input
   input.addEventListener('tiago', isTiago)

   if (nome === 'franco'){ //se o nome digitado no input for franco ele vai disparar o evento franco
    input.dispatchEvent(new Event('franco'))
   } else if (nome === 'tiago'){
    input.dispatchEvent(new Event('tiago'))
   }
}

function isFranco (){
    window.alert('é o Franco')
}

function isTiago (){
    window.alert('é o Tiago')
}