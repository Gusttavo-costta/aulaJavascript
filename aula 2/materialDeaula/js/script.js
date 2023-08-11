// OPERADORES LOGICOS
// & (E)
// || (OU)
// ! (NÃO)

//  OPERADORES RELACIONAIS 
// > MAIOR QUE 
// < MENOR QUE 
// >= MAIOR OU IGUAL QUE 
// <= MENOR OU IGUAL QUE 
// == IGUAL A 
// != DIFERENTE

// estrutura do if 
// if (condição) {
//     bloco de codigo
// }
// else {
//     bloco de codigo
// }

if (false) {
    console.log("Você esta no if")
}else {
    console.log("voce esta no else");
}

// maior de idade if script

window.alert("Boa tarde!");
const idade = Number(window.prompt("Qual é a sua idade?"));

if (idade < 0 || isNaN(idade)){
    window.alert("idade inválida");
    location.reload();
}else {
    if (idade >= 0 & idade >= 18){
        window.alert("você é maior de idade, seja bem vindo!")
    }else {
        if (idade < 18) {
            window.alert("você é menor de idade! acesso não permitido");
            location.reload();
        }
    }
}