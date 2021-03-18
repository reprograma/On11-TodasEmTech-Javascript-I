// exercicios desafios

//6 *Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.*
//console.log("Exercicio6")

let dia = prompt("Digite um número de 1 a 7:");

if(dia==1){
    console.log("o dia da semana é DOMINGO")
} else if (dia==2) {
    console.log("o dia da semana é SEGUNDA")
} else if (dia==3) {
    console.log("o dia da semana é TERÇA")
} else if (dia==4) {
    console.log("o dia da semana é QUARTA")
} else if (dia==5) {
    console.log("o dia da semana é QUINTA")
} else if (dia==6) {
    console.log("o dia da semana é SEXTA")
} else if (dia==7) {
    console.log("o dia da semana é SÁBADO")
} else {
    console.log("VALOR INCORRETO")
}

//7 *Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".*

let num1 = prompt("Digite um valor:")
let num2 = prompt("Digite outro valor:")

if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}`)
} else if (num2 > num1) {
    console.log(`${num2} é maior que ${num1}`)
} else {
    console.log(`os números são iguais`)
}

//8 *João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, mostrar o excesso e o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.*

let peso = prompt("Digite o quilo do peixe, desconsiderar as gramas")
let multa = 4
let excesso = peso - 50

if(excesso<=0){
    console.log("0")
} else {
    console.log(`a multa por excesso é R$`, excesso*multa)
}