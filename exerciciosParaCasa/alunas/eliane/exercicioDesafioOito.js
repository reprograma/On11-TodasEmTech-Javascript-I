// Exércico Desafio 8

/*
 - 8 *João, Pescador, comprou um microcomputador para controlar 
 o rendimento diário de seu trabalho. Toda vez que ele traz um 
 peso de peixes maior que o estabelecido pelo regulamento de 
 pesca do estado de São Paulo (50 quilos) deve pagar uma multa 
 de R$ 4,00 por quilo excedente. João precisa que você faça um 
 programa que leia a variável peso (peso de peixes) e verifique 
 se há excesso. Se houver, mostrar o excesso e o valor da multa 
 que João deverá pagar. Caso contrário mostrar tais variáveis com 
 o conteúdo ZERO.
*/

let pesoPeixe = 51
let valorPagar = 0
let excessoPeso = 0

if (pesoPeixe > 50) {
    excessoPeso = (pesoPeixe - 50);
    valorPagar = excessoPeso * 4;
    console.log(`O excesso de peso foi de ${excessoPeso}`);
    console.log(`O valor da multa será de: R$ ${valorPagar}`);
} else {
    console.log(`O excesso de peso foi de: ${excessoPeso}`);
    console.log(`O valor da multa será de: ${valorPagar}`);
}