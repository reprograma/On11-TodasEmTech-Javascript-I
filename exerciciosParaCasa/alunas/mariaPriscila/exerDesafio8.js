/* - 8 *João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, mostrar o excesso e o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.*
*/

var readlineSync = require('readline-sync');

let pesoRegular = 50;
let multaQuilo = 4;
let peso = 0;
let pesoExcedente = 0;
let multa = 0;

console.log("Programa que informa se existe excesso no peso do peixe e o valor da multa");

peso = parseFloat(readlineSync.question('Digite o total do peso de peixes: '));

if (peso > pesoRegular){
    pesoExcedente = (peso - pesoRegular).toFixed(3);
    multa = (pesoExcedente * multaQuilo).toFixed(2);
    console.log(`O peso excedente é: ${(pesoExcedente)} kg, deverá pagar a multa de: $ ${(multa)}`);
} else {
    console.log(`O peso excedente é: ${(pesoExcedente)} kg, deverá pagar a multa de: $ ${(multa)}`);
} 


