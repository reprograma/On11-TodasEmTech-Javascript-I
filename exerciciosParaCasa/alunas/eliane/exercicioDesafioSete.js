//Exercício de desafio 7 

/* Elabore um algoritmo que receba dois números e 
determine qual é o maior entre eles, se os números 
forem iguais, mostre uma mensagem no console 
"Os números são iguais".*/

let numero1 = 222;
let numero2 = 222;

if (numero1 == numero2) {
    console.log("Os números são iguais")
} else if (numero1 > numero2) {
    console.log(`O número maior é ${numero1}`)
} else {
    console.log(`O numero maior é ${numero2}`)
}