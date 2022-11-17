// verificação de senha
// Deve conter pelo menos um dígito numérico
// Deve contar pelo menos uma letra minúscula
// Deve conter pelo menos uma letra maiúscula
// Deve conter pelo menos um simbolo especial entre: $_.!#%&*()[]{}^~
// Deve conter no mínimo 8 caracteres

function testar(){
    const teste = document.getElementById('teste').value;
    
    let regExp = /^([$_\.!#%&\*()[\]{}\^~]+)([a-z]+)([A-Z]+)([0-9]+)$/.test(teste)
    
    console.log(regExp);
}
