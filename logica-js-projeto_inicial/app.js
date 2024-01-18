alert("Bem-vindo ao jogo do número secreto!");
let numeroSecreto = 16;
console.log("Número secreto: ", numeroSecreto)
let chute = prompt("Escolha um número entre 1 e 30");
console.log("Valor do chute: ", chute)
console.log("Resultado da comparação: ", chute == numeroSecreto)

if (chute == numeroSecreto) {
    alert(`Parabéns! Você acertou o número secreto (${numeroSecreto})`)
} else {
    alert("Que pena, você errou :(")
}