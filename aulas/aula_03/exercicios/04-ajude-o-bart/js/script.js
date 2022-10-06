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
   const escrita = document.getElementById('escrita');

    if (frase1 == frase2) {
        sortearFrase1 = parseInt(Math.random() * 5);
    }
    
}