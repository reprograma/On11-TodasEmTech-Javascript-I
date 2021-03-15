/*
- 8 *João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) 
deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) 
e verifique se há excesso.
 Se houver, mostrar o excesso e o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.*
*/

let getPesoPeixe = prompt("Digite o peso de peixes: ");
let valorAMais = 0;
if(getPesoPeixe <= 50){
    console.log("O peso do peixe está correto, sem excesso");
    console.log(valorAMais);
} else if(getPesoPeixe > 50){
    valorAMais = getPesoPeixe - 50;
    console.log(`O valor do excesso é ${valorAMais} Kg`);
    console.log(`O valor da multa é R$ ${valorAMais*4} `);
};