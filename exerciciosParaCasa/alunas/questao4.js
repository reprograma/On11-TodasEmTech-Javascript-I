/* 4 *Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado:*
    - caso 1: 12 dias e 320 km; 
    - caso 2: 6 dias e 390km; */


let carro = 60
let kmrodado = 0.15

let caso1 = 12*carro + 320*kmrodado
let caso2 = 6*carro + 390*kmrodado
console.log(`No caso 1, o preço a pagar é de ${caso1} reais`)
console.log(`No caso 2, o preço a pagar é de ${caso2} reais`)
