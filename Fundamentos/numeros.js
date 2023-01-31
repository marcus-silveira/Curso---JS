const peso1 = 1.0
const peso2 = 2.0

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

avaliacao1 = 8.7
avaliação2 = 7.3

const total = avaliacao1 * peso1 + avaliação2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // em binário
