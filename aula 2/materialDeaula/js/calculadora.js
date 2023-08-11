window.alert("Bem vindo a calculadora!");
const numero1 = Number(window.prompt("Digite o seu primeiro número:"));
const operador = window.prompt("Digite a operação desejada: (Obs:Apenas +,-,/,*) ");
const numero2 = Number(window.prompt("Digite o seu segundo número: "));
var resultado = undefined;

switch(operador){
    case "+":
        resultado = numero1 + numero2;
        window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break
    case "-":
        resultado = numero1 - numero2;
        window.alert(`O resultado do calculo é de ${resultado}`);
        location.reload();
        break
    case "*":
        resultado = numero1 * numero2;
        window.alert(`O resultado do calculo é de ${resultado}`);
        location.reload();
        break
    case "/":
        resultado = numero1 / numero2;
        window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break
    default :
        window.alert("O operador é invalido! Tente novamente");
        location.reload();
        break
}
