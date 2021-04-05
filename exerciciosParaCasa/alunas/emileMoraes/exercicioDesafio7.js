/*- 7 *Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, 
mostre uma mensagem no console "Os números são iguais".*
*/

let getNumeroOne = prompt("Digite um número: ");
let getNumeroTwo = prompt("Digite um número: ");
let maior;
if(parseInt(getNumeroOne) > parseInt(getNumeroTwo)){
    maior = getNumeroOne;
    console.log(maior);
} else if (parseInt(getNumeroOne) < parseInt(getNumeroTwo)){
    maior = getNumeroTwo;
    console.log(maior);
} else{
    console.log("Os números são iguais");
};