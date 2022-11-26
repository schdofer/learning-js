let urlCadastrada = [];
let urlBloqueada = [];
let regExp = 'www.gmail.com'
function cadastrarUrl() {
let url = document.getElementById('url').value;
console.log(url);
if (url === regExp ){
    urlCadastrada.push(url);
} else {
    urlBloqueada.push(url)
}
console.log(urlCadastrada);
console.log(urlBloqueada);
}

function pesquisarUrl(){
    let url = document.getElementById('url').value;
    for (value of urlCadastrada){
        if (url === urlCadastrada[value]){
            console.log(`A urll ${url} está liberada`);
        } else {
            console.log(`A url ${url} está bloqueada`);
        }
    }
}