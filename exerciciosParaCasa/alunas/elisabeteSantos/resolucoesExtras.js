// Resoluções mais simples dos exercicios 5, 6 , 7 e 8 

/*5 *Receba do usuários 3 números ou crie variaveis com 3 números, e calcule a média entre eles.*/

const numeroUm = 7;
const numeroDois = 9;
const numeroTres = 5;

media = (numeroUm + numeroDois + numeroTres) / 3;

console.log('A média é: ', media);


/*- 6 *Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.*/

const numeroDiaDaSemana = 4;

if(numeroDiaDaSemana == 1){
    console.log('Hoje é Segunda-Feira');
}
    else if(numeroDiaDaSemana == 2){
    console.log('Hoje é Terça-Feira');
}
        else if(numeroDiaDaSemana == 3){
        console.log('Hoje é Quarta-Feira');
}
            else if(numeroDiaDaSemana == 4){
            console.log('Hoje é Quinta-Feira');
}
                else if(numeroDiaDaSemana == 5){
                console.log('Hoje é Sexta-Feira');
}
                    else if(numeroDiaDaSemana == 6){
                    console.log('Hoje é Sábado');
}
                        else if(numeroDiaDaSemana == 7){
                        console.log('Hoje é Domindo');
}else{
    console.log('O número digitado não corresponde a nenhum dia da semama');
}


/*7 *Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, 
se os números forem iguais, mostre uma mensagem no console "Os números são iguais".*/

const numUm = 3
const numDois = 4

if(numUm > numDois){
    console.log('O número maior é: ', numUm);
} else if(numUm < numDois){
    console.log('O número maior é: ', numDois);
} else {
    console.log('Os números são iguais!');
}


/*8 *João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca 
do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. 
João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se 
há excesso. Se houver, mostrar o excesso e o valor da multa que João deverá pagar. 
Caso contrário mostrar tais variáveis com o conteúdo ZERO.*/

let multaexcedente = 4.0;
const limiteQuilo = 50;

let pesoDoPeixe = 70; // aqui você pode mudar o valor do peso do peixe 

if(pesoDoPeixe > 50){
    const excessoPeso = pesoDoPeixe - limiteQuilo
    const totalPagar = multaexcedente * excessoPeso;

    console.log('O excesso de peso é: ', excessoPeso);
    console.log('A multa por excesso de peso é: ', totalPagar);
}else{
    console.log('Não há excesso de peso!');
}
