/* 4 *Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado:*
    - caso 1: 12 dias e 320 km; 
    - caso 2: 6 dias e 390km; 
*/


let valorCarro = 60;
let kmRodado = 0.15;
const caso1 = (valorCarro * 12) + (kmRodado * 320);
const caso2 = (valorCarro * 6) + (kmRodado * 390);

console.log(`Preço a pagar caso 1: ${(caso1.toFixed(2))}`)
console.log(`Preço a pagar caso 2: ${(caso2.toFixed(2))}`)


