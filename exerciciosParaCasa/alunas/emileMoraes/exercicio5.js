/*
- 5 *Receba do usuários 3 números ou crie variaveis com 3 números, e calcule a média entre eles.*
*/

let getNumeroOne = prompt("Digite o primeiro número: ");
let getNumeroTwo = prompt("Digite o segundo número: ");
let getNumeroThree = prompt("Digite o terceiro número: ");

const media =  (parseInt(getNumeroOne) +  parseInt(getNumeroTwo) +  parseInt(getNumeroThree))/3;
console.log(`A média é ${media}`);