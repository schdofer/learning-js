let urlCadastrada = [];
let urlBloqueada = [];
let regExp = /http(s)?:\/\/(w{3})\.\w+(\.\w{2,4})+/
function cadastrarUrl() {
let url = document.getElementById('url').value;
let verificaurl = regExp.test(url)
console.log(verificaurl);
if (verificaurl === true){
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
        if (url === value){
            console.log(`A url ${url} está liberada`);
        } else {
            console.log(`A url ${url} está bloqueada`);
        }
    }
    }