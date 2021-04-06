/* Exercício 4: Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado:*
    - caso 1: 12 dias e 320 km; 
    - caso 2: 6 dias e 390km; 
*/


//Definição das variáveis

const valorDia = 60.00
const valorKm = 0.15

//caso 1: 12 dias e 320 Km

valorPagar = valorDia*12 + valorKm*320
console.log('Valor a pagar no Caso 1 (12 dias e 320 Km) é: R$', valorPagar)

//caso 1: 6 dias e 390 Km

valorPagar = valorDia*6 + valorKm*390
console.log('Valor a pagar no Caso 2 (6 dias e 390 Km) é: R$', valorPagar)