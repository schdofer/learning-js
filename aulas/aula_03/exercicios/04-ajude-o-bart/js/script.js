const fraseA = 'Não vou mirar na cabeça<br>';
const fraseB = 'Eu não vou encorajar o Ralph a voar<br>';
const fraseC = 'Não instigarei uma revolução<br>';
const fraseD = 'Eu não vou passar sabão nas escadas<br>';
const fraseE = 'Explosivos e a escola não se misturam<br>';
let frases = [fraseA, fraseB, fraseC, fraseD, fraseE];


function sortearFrase() {
    let sortearFrase1 = parseInt(Math.random() * 5)
    let sortearFrase2 = parseInt(Math.random() * 5)
    let frase1 = frases[sortearFrase1]
    let frase2 = frases[sortearFrase2]
    if (frase1 == frase2) {
        sortearFrase2 = parseInt(Math.random() * 5);
    }
    // let escritaQuadro = document.getElementById('escrita')
    let escritaQuadro = frase1 + frase2
    escrita.innerHTML = escritaQuadro
   
   while (escrita.innerHTML < 25){
    escrita.innerHTML = escritaQuadro
   }

}