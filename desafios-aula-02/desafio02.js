let numero = prompt('Digite um número:')
console.log('Número digitado: ', numero)

if (numero > 0) {
    alert(`O número ${numero} é positivo.`)
} else if (numero < 0) {
    alert(`O número ${numero} é negativo.`)
} else {
    alert('O número 0 é neutro.')
}