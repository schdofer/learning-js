const fraseA = ' Não vou mirar na cabeça,';
const fraseB = ' Eu não vou encorajar o Ralph a voar,';
const fraseC = ' Não instigarei uma revolução,';
const fraseD = ' Eu não vou passar sabão nas escadas,';
const fraseE = ' Explosivos e a escola não se misturam,';
let frases = [fraseA, fraseB, fraseC, fraseD, fraseE];


function sortearFrase() {
    let sortearFrase1 = parseInt(Math.random() * 5);
    const sortearFrase2 = parseInt(Math.random() * 5);
    let frase1 = frases[sortearFrase1];
    const frase2 = frases[sortearFrase2];
    
    if (frase1 == frase2) {
        sortearFrase1 = parseInt(Math.random() * 5);
        frase1 = frases[sortearFrase1];
    }
    

    const escreverQuadro = document.getElementById('escrita');
    const escrita = frase1 + frase2 + '<br>';
    let escritaGiz = ''; // string vazia, se colocar um número ou texto vai aparecer no quadro
    //usar let para as variáveis que vão adquirir um novo valor

    for (i = 0; i < 25; i++) {
        escritaGiz += escrita
        escreverQuadro.innerHTML = escritaGiz
    }
}

function apagar() {
    const apagarQuadro = document.getElementById('escrita');
    apagarQuadro.innerHTML = '';
}