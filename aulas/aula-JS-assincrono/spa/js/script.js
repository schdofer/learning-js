const content = document.getElementById('content')
const home = document.getElementById('home')
const contato = document.getElementById('contato')
const sobre = document.getElementById('sobre')

home.addEventListener('click', () => go('home'))
contato.addEventListener('click', () => go('contato'))
sobre.addEventListener('click', () => go('sobre'))

async function go(page) {
    const url = `pages/${page}.html`
    const response = await fetch(url)
    //const html = 
    console.log(response);
}