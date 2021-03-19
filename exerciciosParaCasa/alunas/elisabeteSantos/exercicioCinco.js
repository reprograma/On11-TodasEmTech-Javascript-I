/*5 *Receba do usuários 3 números ou crie variaveis com 3 números, e calcule a média entre eles.*/

// recebendo variaveis digitadas no terminal 
const input=require('readline-sync')

const numeroUm = input.question('Informe o primeiro número: ')
const numeroDois = input.question('Informe o segunndo número: ')
const numeroTres = input.question('Informe o terceiro número: ')

const total = parseFloat(numeroUm) + parseFloat(numeroDois) + parseFloat(numeroTres)

media = total / 3

console.log(' a média é: ', media.toFixed(2))



