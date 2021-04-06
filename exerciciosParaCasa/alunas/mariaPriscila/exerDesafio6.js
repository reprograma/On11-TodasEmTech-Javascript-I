/*

**Exercícios desafios**
- 6 *Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.*

*/

// Desafio 6

var readlineSync = require('readline-sync');
let dia = 0;

console.log("Programa que informa o dia da semana");

dia = parseInt(readlineSync.question('Digite um valor entre 1 e 7:'));

switch (dia) {
    case 1: console.log("domingo"); break;
    case 2: console.log("segunda-feira"); break;
    case 3: console.log("terça-feira"); break;
    case 4: console.log("quarta-feira"); break;
    case 5: console.log("quinta-feira"); break;
    case 6: console.log("sexta-feira"); break;
    case 7: console.log("sabádo"); break;
  default:
    console.log("não é um dia da semana válido");
}
