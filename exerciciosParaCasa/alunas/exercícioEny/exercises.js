/* - Declare uma variável chamada meuNome.
- Inicialize meuNome com um valor adequado em uma linha separada (você pode usar seu nome real ou qualquer outra coisa).
- Declare uma variável chamada minhaIdade e inicialize-a com um valor, na mesma linha.
- Adicione uma nova linha para alterar o valor armazenado na variável meuNome existente por outro nome.
- Mostre no console o valor da variável minhaIdade e da variável meuNome.*/

let meuNome;
meuNome = 'Eny';
let minhaIdade = 27;
meuNome = 'Carla Diaz';
console.log("Nome:", meuNome, "Idade:", minhaIdade);

/* 2 *O código abaixo possui dois erros. O console deve exibir o nome Chris, e uma declaração sobre quantos anos Chris terá daqui a 20 anos. Como você pode corrigir o problema e corrigir a saída?*

const myName = 'Default';    
myName = 'Chris';
let myAge = '42';
console.log(myName);    
console.log(\`In 20 years, I will be ${myAge + 20}`);*/

//Resolução abaixo: 
let myName = 'Default';
myName = 'Chris';

let myAge = 42;

console.log(myName);
console.log(`In 20 years, I will be ${myAge + 20}.`);

/*3 *Execute as seguintes tarefas: 1.Declare uma nova variável chamada 'calculadora', e adicione uma instrução somando os valores 10 e 5.*
    - Incremente 1 à variável 'calculadora', usando o operador de soma abreviado.
    - Atribua à variável 'calculadora' seu próprio valor multiplicando por 3, usando o operador de multiplicação abreviado.
    - Mostre o valor de 'calculadora' no console.*/
let calculadora = 10 + 5;
calculadora *= 3

console.log("Resultado final: ", calculadora);

/*4- *Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado:*
    - caso 1: 12 dias e 320 km; 
    - caso 2: 6 dias e 390km;*/
let diasCaso1 = 12;
let kmCaso1 = 320;
let diasCaso2 = 6;
let kmCaso2 = 390;
let calculoCaso1 = (60 * diasCaso1) + (0.15 * kmCaso1);
let calculoCaso2 = (60 * diasCaso2) + (0.15 * kmCaso2);

console.log("Caso 1:", calculoCaso1, "Caso 2:", calculoCaso2);

/*5 - *Receba do usuários 3 números ou crie variaveis com 3 números, e calcule a média entre eles.*/

let number1 = 3;
let number2 = 5;
let number3 = 8;

let media = (number1 + number2 + number3) / 3;
console.log("Média dos números:", media.toFixed(2));

/* 6 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.*/
let dayOfWeek = 1;
if (dayOfWeek == 1) {
    console.log("Dia da Semana: Domingo");
} else if (dayOfWeek == 2) {
    console.log("Dia da Semana: Segunda-Feira");
} else if (dayOfWeek == 3) {
    console.log("Dia da Semana: Terça-Feira");
} else if (dayOfWeek == 4) {
    console.log("Dia da Semana: Quarta-Feira");
} else if (dayOfWeek == 5) {
    console.log("Dia da Semana: Quinta-Feira");
} else if (dayOfWeek == 6) {
    console.log("Dia da Semana: Sexta-Feira")
} else {
    console.log("Dia da Semana: Sábado");
}

 /*7 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".*/
 let numero1 = 8;
 let numero2 = 6

    if(numero1 > numero2){
        console.log(`O primeiro número digitado (${numero1}) é maior que o segundo (${numero2})`);
        } else if( numero1 < numero2){
            console.log(`O segundo número digitado (${numero2}) é maior que o primeiro (${numero1})`);
        } else {
            console.log("Os números são iguais.");
        }

 /*8 - João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, mostrar o excesso e o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.*/
    let peso = 50;

    if( peso < 50){
    let excesso1 = 0;
    let multa1 = 0;
    console.log('Excesso =', excesso1, 'Multa =', multa1);
 } else {
    let excesso = peso - 50;
    let multa = excesso * 4;
     console.log(
         'Excesso =', excesso, 'Multa = ', multa
     );
 }

 