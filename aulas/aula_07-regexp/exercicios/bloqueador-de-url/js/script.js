let urlCadastrada = [];
let urlBloqueada = [];
let regExp = /http(s)?:\/\/(w{3})\.\w+(\.\w{2,4})+/

function cadastrarUrl() {
let url = document.getElementById('url').value;
let verificaurl = regExp.test(url)
console.log(verificaurl);
if (verificaurl === true){
    urlCadastrada.push(url);
    return urlCadastrada
} else {
    urlBloqueada.push(url)
}

}
console.log(urlCadastrada);

function pesquisarUrl(urlCadastrada){
   // let url = document.getElementById('url').value;
    for (let index = 0; index < urlCadastrada; index += 1){
        if (url === index){
            console.log(`A url ${url} está liberada`);
        } else {
            console.log(`A url ${url} está bloqueada`);
        }
    }
    }



