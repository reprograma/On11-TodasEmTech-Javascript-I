/*
Exercício 0:

Sobre minha preparação para o trabalho:

1. Sento na cadeira;
2. Abro o computador;
3. Ligo o computador;
4. Coloco minha senha de login do windows; 
5. Aguardo a inicialização do windows;
6. Abro o chrome; 
6.1. Abro o Azure DevOps;
7. Se já tenho tasks pro dia, só leio;
7.2. Se não, escrevo minhas tasks do dia;
8. Abro os templates no Photoshop;
9. Abro o VScode;
10. Se a pasta do projeto já estiver aberta eu começo a codar;
10.2. Se não, eu abro a pasta para começar a codar;
11. Abro o código no LocalServer pelo npmstart para acompanhar o progresso;
12. Se vou fazer algo que sei, fico fico feliz;
12.2. Se vou fazer algo que eu não sei, me desespero até conseguir;
13. Tento várias possibilidades pra solucionar o probema;
14. Fico muitoo feliz quando finalmente resolvo;
*/
 /* ------------------------------------------------------ */
// exercicio 1:

let meuNome;
meuNome = "Lilit";
let minhaIdade = 32;
meuNome = 'Lili T'

console.log(meuNome, minhaIdade)

/* ------------------------------------------------------ */
//exercício 2:

let myName = 'Default';    
myName = 'Chris'; //primeiro erro é mudar o valor de uma const, assim mudamos para let;

let myAge = '42'; //o segundo erro é que o número está sendo passado como string, conheço duas soluções possíveis, criar uma nova variável passando a variável myAge no método parseFloat() para transformar a string em um número: 

let ageNumber = parseFloat(myAge); //aí passamos essa variável no console no lugar da myAge;

//ou passa o valor como número pra variável myAge:

myAge = 42;


console.log(myName);    
console.log(`In 20 years, I will be ${ageNumber + 20}`); //acho que a barra antes da template string também é um erro extra;
console.log(`In 20 years, I will be ${myAge + 20}`); 
/* ------------------------------------------------------ */
//exercício 3:

let calculadora = 10 + 5;
calculadora--;
calculadora *= 3;

console.log(calculadora);

//exercício 4:

const valorDia = 60;
const valorKm = .15;

//caso1:
console.log(`o preço à pagar é: R$${(12 * valorDia) + (320 * valorKm) },00`);
//caso 2:
const caso2 = `o preço à pagar é: R$${(6 * valorDia) + (390 * valorKm) }`
console.log(caso2.replace('.',',') + '0');

//exercício 5:

let nota1 = 7.4
let nota2 = 9
let nota3 = 4.2

let media =(nota1 + nota2 + nota3)/3

console.log(media);

//exercício 6:

let num = prompt('digite o número do dia da semana')
console.log(num) 

if(isNaN(num) === true || num < 1 || num > 7) {
  console.log('digite um número Real entre 1 e 7')
} else if(num == 1) {
  console.log('Hoje é domingo')
} else if(num == 2) {
  console.log('Hoje é segunda')
} else if(num == 3) {
  console.log('Hoje é terça')
} else if(num == 4) {
  console.log('Hoje é quarta')
} else if(num == 5) {
  console.log('Hoje é quinta')
} else if(num == 6) {
  console.log('Hoje é sexta')
} else if(num == 7) {
  console.log('Hoje é sábado')
}

//exercício 7:

let numero1 = prompt('digite o numero 1')
let numero2 = prompt('digite o numero 2')

if(numero1 > numero2) {
  console.log(`o ${numero1} é maior que o ${numero2}`)
} else if(numero1 < numero2) {
  console.log(`o ${numero2} é maior que o ${numero1}`)
} else {
  console.log(`Os números são iguais`)
}

//exercícios 8:

/*João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, mostrar o excesso e o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.*/

let pesoPeixe = prompt('digite o peso do peixe');

let excedente = ((pesoPeixe - 50).toFixed(2)).replace('.',',');
let multa = (((pesoPeixe - 50) * 4).toFixed(2)).replace('.',',');

if(isNaN(pesoPeixe) === true) {
  console.log('digite um valor de peso válido, numérico')
} else if (pesoPeixe > 50) {
  console.log(`você excedeu ${excedente}Kg e vai pagar uma multa de R$${multa}`)
} else {
  console.log('você não excedeu o peso permitido e vai pagar R$0,00 de multa')
}
