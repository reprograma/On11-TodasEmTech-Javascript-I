/*- 7 *Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre 
uma mensagem no console "Os números são iguais".*/

const input=require('readline-sync')

const numeroUm = input.question('Informe o primeiro numero: ')
const numeroDois = input.question('Informe o segundo numero: ')

if( numeroUm > numeroDois){
    console.log('O numero maior é o: ', numeroUm)
}
    else if( numeroUm < numeroDois){
        console.log('O número maior é o: ', numeroDois)
    }  
    else {
        console.log('Os números são iguais')
    }