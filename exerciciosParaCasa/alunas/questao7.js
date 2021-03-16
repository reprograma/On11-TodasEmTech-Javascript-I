/*7 *Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".*/


let n1
let n2
n1 = 10
n2 = 10

if (n1==n2) {
    console.log('Os números são iguais')
} else if (n1>n2){
    console.log(`O maior número é: ${n1}`)
} else {console.log(`O maior número é: ${n2}`)}
