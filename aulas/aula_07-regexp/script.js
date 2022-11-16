//expressão regular para validar email

let email1 = "natyks@gmail.com";
let email2 = "natyks@terra.com";
let email3 = "natyksgmail.com";

//let testEmail = /^natyks@gmail.com$/;
//testEmail.test(email1) -> vai dar true por ter padrão igual

//let testEmail = /^\w+@gmail.com$/; -> vai validar a primeira parte, antes do @

let testEmail = /^\w+@\w+(\.\w{2,3}){1,2}$/;
            //natyks@gmail.com(.br se precisar).
            //Cria um grupo envolvendo entre parenteses. Aqui tem-se um grupo de caracteres e metacaracteres
            //Depois é colocado um quantificador no para o grupo (para caso precise ter o .br)