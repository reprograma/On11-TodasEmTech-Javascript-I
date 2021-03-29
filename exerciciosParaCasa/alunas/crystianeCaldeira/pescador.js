/*João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho.
Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de 
São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente.João precisa que você 
faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, mostrar o excesso e o 
valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.*/

let pesoLegal= 50
let pesoPeixe= 67
let multa= 4.00
let valorExcedido= pesoPeixe - pesoLegal;
let multaTotal=(pesoPeixe - pesoLegal) * multa;
let totalPagar=multaTotal+pesoLegal;

if(pesoPeixe<=pesoLegal){
    console.log("Você não pagará multa !!!");
}else{
console.log("Você excedeu"+" "+ valorExcedido +" "+ "Quilos.")
console.log("*****Valor exedido de acordo com o regulamento de pesca do Estado de SãO Paulo.*****")

console.log("Valor total á pagar de multa R$" +" " + multaTotal.toFixed(2))
console.log("Total a Pagar R$" + " " + totalPagar.toFixed(2));
}

