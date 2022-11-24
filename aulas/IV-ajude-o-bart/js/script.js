function escrever() {   

   let frase1 = document.getElementById('frase1').value;  
   let frase2 = document.getElementById('frase2').value;
   const metade1 = document.getElementById('metade1');
   const metade2 = document.getElementById('metade2');

   
   if (!frase1 || !frase2){
      document.getElementById('retorno').style.display = 'flex';
      document.getElementById('retorno').innerHTML = 'INFORMAR AS 2 FRASES';
      
   }
   else
   document.getElementById('retorno').style.display = 'none';

   
   for (let i = 0; i < 10; i++){
      setTimeout(function(){
            metade1.innerHTML += frase1;
            metade1.innerHTML += '<br>';
            metade1.innerHTML += frase2 ;
            metade1.innerHTML += '<br>';
      },2000);
   }

}

/*
async function atualiza(element, msg){
      element.innerHTML += msg;
      console.log('passei aq');  
      element.style.animation = `cursorBlink 800ms steps(40) infinite normal, typing 8000ms steps(100) normal 1 both`;
      console.log('passei aq 1');  
      return true;
   }

   for (let i = 0; i < 10; i++){
      try {   
        x =  await atualiza(metade1,  frase1);
       
      }catch (error){

       }
       finally{
              document.getElementById('metade1').innerHTML += '<br>';
               //document.getElementById('escreve').innerHTML +=  frase2 + '<br>';  
               console.log(i);    
            }
    
   }
*/