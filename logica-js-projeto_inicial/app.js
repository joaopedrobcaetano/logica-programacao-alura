alert("Bem-vindo ao jogo do número secreto!");
let numeroSecreto = 16;
console.log("Número secreto: ", numeroSecreto);
let chute;
let tentativas = 1;
console.log("Valor do chute: ", chute);
console.log("Resultado da comparação: ", chute == numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 30");
    if (chute == numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto (${numeroSecreto}), com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
        tentativas++
    }
}

