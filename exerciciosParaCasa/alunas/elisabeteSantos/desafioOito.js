/* 8 *João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado
 de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. 
 João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso.
  Se houver, mostrar o excesso e o valor da multa que João deverá pagar. 
  Caso contrário mostrar tais variáveis com o conteúdo ZERO.*/


const input=require('readline-sync')

const pesoQuiloDePeixo = input.question('Informe quantos quilos de peixe foi pescado: ')

const multaExcedente = 4.0
const limitesDeQuilos = 50

if(pesoQuiloDePeixo > 50){
    let excessoDePeso =  pesoQuiloDePeixo - limitesDeQuilos
    let total = multaExcedente * excessoDePeso

    console.log('O excesso de peso é: ', excessoDePeso )
    console.log('O valor da multa pelo excesso de peso é: ', total )
} else{
    console.log(' Não há excesso de pesso')
}