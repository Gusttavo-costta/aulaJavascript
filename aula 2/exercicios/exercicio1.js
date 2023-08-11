window.alert("Boa tarde, meu brother.")
const idade = Number(window.prompt("Qual é a sua idade?"));

if (idade < 0 || isNaN(idade)) {
    window.alert("idade inválida");
    location.reload();
} else {
    if (idade >= 0 & idade < 15) {
        window.alert("criança")
    } else {
        if (idade >= 15 & idade < 30) {
            window.alert("Jovem")
            location.reload();
        } else {
            if (idade >= 30 & idade < 60) {
                window.alert("Adulto")
                location.reload();
            } else {
                window.alert("Idoso");

            }
        }
    }
}