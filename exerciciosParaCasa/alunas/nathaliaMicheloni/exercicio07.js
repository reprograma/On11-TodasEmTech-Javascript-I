// Exercício para casa nº 7:

// *Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".*

const numeros = [];

numeros.push(2);
numeros.push(5);

let maior = function getMaxOfArray(numeros) {
    return Math.max.apply(null, numeros);
};

console.log(`O maior numero entre os valores ${numeros[0]} e ${numeros[1]} é o número ${maior(numeros)}`);