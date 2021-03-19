/** 
 *     - O aluguel do carro custa 60,00 reais por dia e 0,15 centavos por km rodado;
 *     - caso 1: 12 dias e 320km; 
 *     - caso 2: 6 dias e 390km;
 **/

const valorPorDia = 60.00
const valorPorKm = 0.15

let caso1 = (valorPorDia * 12) + (valorPorKm * 320)
let caso2 = (valorPorDia * 6) + (valorPorKm * 390)

let valorFormatadoCaso1 = caso1.toLocaleString('pt-br', {minimumFractionDigits: 2})
let valorFormatadoCaso2 = caso2.toLocaleString('pt-br', {minimumFractionDigits: 2})

console.log(`O valor do aluguel do carro no caso 1 é: R$ ${valorFormatadoCaso1}`)
console.log(`O valor do aluguel do carro no caso 2 é: R$ ${valorFormatadoCaso2}`)