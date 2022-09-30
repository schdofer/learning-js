const nomes = ["Natália", "Jéssica", "Larissa", "Vanessa", "Camila", "Yura", "Fernando", "Marcelo", "Franco", "Tiago"]; //índices de 0 a 9
const sorteio = parseInt(Math.random() * 10); //para converter para um número inteiro
// console.log(sorteio)
const computador = nomes[sorteio]; //utilizar o número do sorteio no índice da array
console.log(computador);
let tentativas = 3;
const numeroTentativas = 0;

function adivinhar() {
    const nomeDigitado = document.getElementById('nome').value; //pegar o nome digitado pela pessoa
    const resultado = document.getElementById('resultado');

    if (nomeDigitado == computador) {
        resultado.classList.add('acerto');
        resultado.classList.remove('erro');
        resultado.classList.remove('tentativa');
        resultado.innerHTML = `
        Você acertou! 😃
        ` ;
    } else {
        resultado.classList.add('erro');
        resultado.classList.remove('acerto');
        resultado.classList.remove('tentativa');
        tentativas--
        resultado.innerHTML = `
        Você errou.<br>Você tem: ${tentativas} chance(s)
        `;
    }

    if (tentativas == numeroTentativas) {
        resultado.classList.add('tentativa');
        resultado.classList.remove('acerto');
        resultado.classList.remove('erro');
        resultado.innerHTML = `
    Suas chances acabaram. 😕
    <br>O nome era: ${computador}.
        `;
    } else if (tentativas < 0) {
        resultado.classList.add('tentativa');
        resultado.classList.remove('acerto');
        resultado.classList.remove('erro');
        resultado.innerHTML = `
    Recarregue para uma nova chance!
    `
    }
}