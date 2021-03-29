/*João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo 
(50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a 
variável peso (peso de peixes) e verifique se há excesso. Se houver, mostrar o excesso e o valor da multa que João 
deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.*/

var peixeFree;
peixeFree = 50

var multaKg;
multaKg = 4;

var peixeTotal;
peixeTotal = prompt ("usuário insere o valor total");

if (peixeTotal > 50) {
console.log (multaKg * (peixeTotal - 50))
};
if (peixeTotal<= 50) {
    console.log (ZERO)
}
