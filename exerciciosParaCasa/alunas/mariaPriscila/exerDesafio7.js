/* - 7 *Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".*

*/

var readlineSync = require('readline-sync');
let num1 = 0;
let num2 = 0;

console.log("Programa que informa se < , > , ou igualdade entre dois valores");

num1 = parseFloat(readlineSync.question('Digite o valor 1: '));
num2 = parseFloat(readlineSync.question('Digite o valor 2: '));

if (num1 > num2){
    console.log(`O valor 1: ${(num1)} é maior que o valor 2: ${(num2)}`);
} else if (num2 > num1){
    console.log(` O Valor 2: ${(num2)} é maior que o valor 1: ${(num1)}`);
} else {
    console.log("Os números são iguais");
}