//**Exercícios desafios**//
//*João, Pescador, comprou um microcomputador para controlar o 
//rendimento diário de seu trabalho. Toda vez que ele traz um peso 
//de peixes maior que o estabelecido pelo regulamento de pesca 
//do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. 
//João precisa que você faça um programa que leia a variável peso (peso de peixes) e 
//verifique se há excesso. Se houver, mostrar o excesso e o valor da multa que João deverá 
//pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.*//


const pesos = 100;
const limite = 50;
const excesso = (pesos - limite)
const multa = (excesso * 4)
console.log('Total do excesso', excesso);


if (excesso >= 50) {
    console.log('Total da multa' , multa)
 
 } else {
 
     console.log('Não teve excesso')
 }


