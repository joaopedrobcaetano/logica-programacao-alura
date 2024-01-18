let diaDeHoje = prompt('Que dia é hoje? ')
console.log(`Hoje é ${diaDeHoje}.`)

if (diaDeHoje === 'Sábado' || diaDeHoje === 'Domingo') {
    alert('Bom fim de semana!')
} else if (diaDeHoje === 'Segunda' || diaDeHoje === 'Terça' || diaDeHoje === 'Quarta' || diaDeHoje === 'Quinta' || diaDeHoje === 'Sexta') {
    alert('Boa semana!')
} else {
    alert('Digite um dia válido.')
}