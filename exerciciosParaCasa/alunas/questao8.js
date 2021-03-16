/*8 *João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, mostrar o excesso e o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.*/

const pesoideal = 50
let pesodepeixes
pesodepeixes = 52
let excesso = pesodepeixes-pesoideal
let multa = (excesso)*4

if (pesodepeixes>pesoideal){

    console.log(`O peso ideal foi excedido em ${excesso} kg`)
    console.log(`Você irá pagar ${multa} reais de multa`)
} else {
    excesso = 0
    multa = 0
    console.log(`O excesso é igual a ${excesso}`)
    console.log(`A multa é igual a ${multa}`)
}
