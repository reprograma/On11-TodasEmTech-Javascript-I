/*
- 4 Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado:*
    - caso 1: 12 dias e 320 km; 
    - caso 2: 6 dias e 390km; 

    kmp = int(input("Digite a quantidade de km percorridos: "))
dias = int(input("Digite a quantidade de dias: "))

print ('Valor do aluguel: R$ %.2f' %(kmp*0.15 + dias*60) )

*/

var diaria = 60.00
var kmRodado = 0.15

caso1 = diaria * 12 + kmRodado * 320
console.log(`O preço a se pagar no primeiro caso é de R$ ${caso1}`)

caso2 = diaria * 6 + kmRodado * 390
console.log(`O preço a se pagar no segundo caso é de R$ ${caso2}`)