function calcularNumeroMaior(a, b) {
    if (a > b) {
        console.log(`${a} é maior do que ${b}.`);
    } else if (a < b) {
        console.log(`${b} é maior do que ${a}.`);
    } else {
        console.log('Os números são iguais.');
    }
}

calcularNumeroMaior(8, 8);