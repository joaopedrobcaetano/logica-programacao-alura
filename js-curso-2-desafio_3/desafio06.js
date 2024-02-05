function calcularTabuada(numero) {
    for (let contador = 1; contador <= 10; contador++) {
        let resultado = numero * contador;
        console.log(`${numero} * ${contador} = ${resultado}`);
    }
}

calcularTabuada(20);