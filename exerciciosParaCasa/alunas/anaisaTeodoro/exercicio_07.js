/*7 *Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console 
"Os números são iguais".*/

const num1 = parseInt(prompt('Digite um número'));
const num2 = parseInt(prompt('Digite segundo número'));

if(num1 > num2){
    alert(`${num1} é maior que ${num2}`)
}else{
    if(num1 === num2){
        alert('Os números são iguais')
    }
    else{
        alert(`${num2} é maior que ${num1}`)
    }
}