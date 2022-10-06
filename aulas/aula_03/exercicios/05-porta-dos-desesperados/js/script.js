
function vencer() {
    const premio = document.getElementById('resultado');
    premio.innerHTML = `<img src="https://www.pngall.com/wp-content/uploads/2016/07/Treasure-PNG-Picture.png"><br>Parabéns! Você ganhou o tesouro!
        `;
    premio.classList.add('premio');
    premio.classList.remove('monstro');
    premio.classList.remove('desistiu');
    premio.classList.remove('vazio');
}

function devorar() {
    const monstro = document.getElementById('resultado');
    monstro.innerHTML =
        ' <img src="https://images.vexels.com/media/users/3/145046/isolated/lists/bcf701694145b007a036c61493a3a743-ilustracao-de-cara-de-monstro-boca-grande.png"><br> Ops! Você foi devorado!';
    monstro.classList.add('monstro');
    monstro.classList.remove('premio');
    monstro.classList.remove('desistiu');
    monstro.classList.remove('vazio');
}

function sair() {
    const desistiu = document.getElementById('resultado');
    desistiu.innerHTML = 'Você desistiu do jogo!';
    desistiu.classList.add('desistiu');
    desistiu.classList.remove('premio');
    desistiu.classList.remove('monstro');
    desistiu.classList.remove('vazio');
}

function abrirPorta() {
    const saiu = document.getElementById('resultado');
    saiu.innerHTML = 'A porta está vazia, tente outra vez!';
    saiu.classList.add('vazio');
    saiu.classList.remove('premio');
    saiu.classList.remove('monstro');
    saiu.classList.remove('desistiu');
}

