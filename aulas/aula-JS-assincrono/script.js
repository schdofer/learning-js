// https://pokeapi.co/docs/v2
// Poke API

// VARIÀVEIS GLOBAIS
const pesquisar = document.querySelector('#pesquisar');

pesquisar.addEventListener('click', pesquisarPokemon2);


// consumindo uma API "promisse based" com fetch API usando ".then() e ".catch()"
function pesquisarPokemon1 () {
    const baseURL = 'https://pokeapi.co/api/v2';
    const pokemon = document.querySelector('#nome').value.toLowerCase();
    const url = `${baseURL}/pokemon/${pokemon}`; // https://pokeapi.co/docs/v2/pokemon/pokemondigitado
    

    // recebe uma url e retorna uma promisse
    fetch(url)
    .then(function(res) { // quando a promisse retorna com sucesso
        // console.log(res);
        console.log('then');
        return res.json();
    })
    .catch(function (error) {
        console.log('catch');
        console.log(error);
    })
    .then(function (json) {
            console.log(json)
            exibirResultado(json)
        })
    }


// consumindo ma api "promisse based" com fetch api usando o "async/await"
    async function pesquisarPokemon2 () {
        const baseURL = 'https://pokeapi.co/api/v2';
        const pokemon = document.querySelector('#nome').value.toLowerCase();
        const url = `${baseURL}/pokemon/${pokemon}`; // https://pokeapi.co/docs/v2/pokemon/pokemondigitado
// para usar o await preciso declarar que minha função é assincrona (async)

try {
    const response = await fetch(url); //vai aguardar a solução da proimisse, e atribuir a variavel response
    const json = await response.json();
    exibirResultado(json);
}
catch (error){
    console.log(`Erro detectado`);
}


    }

function exibirResultado (pokemon) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = `<h2>Nome: ${pokemon.name}</h2>
    <h3>Tipo: ${pokemon.types[0].type.name}</h3>
    <div>
    <img src="${pokemon.sprites['front_default']}" />
    <img src="${pokemon.sprites['back_default']}" />
    </div>
    `
}