let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarCliqueConsole() {
    console.log('O botão foi clicado');
}

function verificarCliqueAlert() {
    alert('Eu amo JS');
}

function verificarCliquePrompt() {
    let cidade = prompt('Diga o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e me lembrei de você`);
}

function verificarCliqueSoma() {
    let num1 = parseInt(prompt('Digite um número'));
    let num2 = parseInt(prompt('Digite outro número'));
    let resultado = num1 + num2;
    alert(`A soma entre ${num1} e ${num2} é igual a ${resultado}`);
}