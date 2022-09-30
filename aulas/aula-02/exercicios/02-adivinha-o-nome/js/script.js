let nome1 = 'João';
let nome2 = 'Jonas';
let nome3 = 'Tadeu';
let nome4 = 'Elias';
let nome5 = 'Matheus';
let nome6 = 'Cláudio';
let nome7 = 'Josimar';
let nome8 = 'Bruno';
let nome9 = 'Breno';
let nome10 = 'Ricardo';

let winner = 'Breno';


function selectName(selected) {
    if (winner === selected) {
        feedbackMessage('sucesso', 'Parabéns!', 'Você acertou o ganhador.');
    } else {
        feedbackMessage('erro', 'Infelizmente você perdeu!', 'Tente novamente mais tarde.');
    }
}

function feedbackMessage(type, title, message) {
    const feedback = document.getElementById('feedback');
    if (type == 'sucesso') {
        feedback.classList.remove('erro');
        feedback.classList.add('sucesso');
    } else if (type == 'erro') {
        feedback.classList.remove('sucesso');
        feedback.classList.add('erro');
    }
    feedback
        .innerHTML = `
            <h3>${title}</h3>
            <p>${message}</p>
        `;
}

// createAndAddNames();

/**
 * Função para criar e adicionar os 10 nomes para escolha do usuário
 */
// function createAndAddNames() {
//     for(let i = 1; i <= 10; i++) {
//         eval(`div${i} = document.createElement('div');`);

//         eval(`radio${i} = document.createElement('input');`);
//         eval(`radio${i}.setAttribute('type', 'radio');`);
//         eval(`radio${i}.setAttribute('id', 'radio'+${i});`);
//         eval(`radio${i}.setAttribute('name', 'radio');`);
//         // eval(`radio${i}.addEventListener('onclick', selectName);`);

//         eval(`label${i} = document.createElement('label');`);
//         eval(`label${i}.setAttribute('for', 'radio'+${i})`);
//         eval(`label${i}.innerHTML = nome${i};`);

//         eval(`div${i}.appendChild(radio${i});`);
//         eval(`div${i}.appendChild(label${i});`);
//         eval(`document.getElementById('resolucao').appendChild(div${i});`);
//     }
// }

