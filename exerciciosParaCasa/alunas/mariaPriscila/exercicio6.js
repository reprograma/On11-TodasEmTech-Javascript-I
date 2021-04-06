/*  5 *Receba do usuários 3 números ou crie variaveis com 3 números, e calcule a média entre eles.*
*/

var readlineSync = require('readline-sync');
let valor1 = 0;
let valor2 = 0;
let valor3 = 0;
let media = 0;

console.log("Programa que calcula a média");

valor1 = parseFloat(readlineSync.question('Digite o valor 1: '));
valor2 = parseFloat(readlineSync.question('Digite o valor 2: '));
valor3 = parseFloat(readlineSync.question('Digite o valor 3: '));
media = (valor1+valor2+valor3)/3;
console.log(`A média é: ${(media).toFixed(2)}`);