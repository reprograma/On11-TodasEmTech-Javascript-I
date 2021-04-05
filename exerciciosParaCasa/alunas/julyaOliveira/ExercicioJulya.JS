//1 *Execute as seguintes tarefas:*
    // - Declare uma variável chamada meuNome.

    //- Inicialize meuNome com um valor adequado em uma linha separada (você pode usar seu nome real ou qualquer outra coisa).

    //- Declare uma variável chamada minhaIdade e inicialize-a com um valor, na mesma linha.

    //- Adicione uma nova linha para alterar o valor armazenado na variável meuNome existente por outro nome.

    //- Mostre no console o valor da variável minhaIdade e da variável meuNome.

let meuNome
meuNome = "Julya"

let minhaIdade = 23

meuNome = "Oliveira"
console.log("Nome: ", meuNome)
console.log("Idade: ", minhaIdade)

//2 *O código abaixo possui dois erros. O console deve exibir o nome Chris, e uma declaração sobre quantos anos Chris terá daqui a 20 anos. Como você pode corrigir o problema e corrigir a saída?*

     //const myName = 'Default';    
     //myName = 'Chris';

     //let myAge = '42';

     //console.log(myName);    
     //console.log(`In 20 years, I will be ${myAge + 20}`);

     // mudei de const para let
     let myName = 'Default';
     myName = "Chris"  ;

     //tirei as aspas simples do número 42, para não concatenar
     let myAge = 42

     console.log("Name : ", myName)
     console.log(`In 20 years, I will be ${myAge + 20}`);


    // 3 *Execute as seguintes tarefas: 1.Declare uma nova variável chamada 'calculadora', e adicione uma instrução somando os valores 10 e 5.*
    //- Incremente 1 à variável 'calculadora', usando o operador de soma abreviado.
    //- Atribua à variável 'calculadora' seu próprio valor multiplicando por 3, usando o operador de multiplicação abreviado.
    //- Mostre o valor de 'calculadora' no console.

let calculadora
Calculadora = 10 + 5
Calculadora ++
// calculadora = calculadora + 1
Calculadora *= 3
// Calculadora = Calculadora * 3
console.log("o resultado é: ",Calculadora)

//4 *Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado:*
    //- caso 1: 12 dias e 320 km; 
    //- caso 2: 6 dias e 390km; 

let Caso1dias = 12
let Caso1km = 320

let Caso2dias = 6
let Caso2km = 390

let Resultadocaso1 = (60*Caso1dias)+(0.15*Caso1km)
let Resultadocaso2 = (60*Caso2dias)+(0.15*Caso2km)
console.log("Caso 1:",Resultadocaso1)
console.log("Caso 2:",Resultadocaso2)

//- 5 *Receba do usuários 3 números ou crie variaveis com 3 números, e calcule a média entre eles.*

let Numero1 = 10
let Numero2 = 20
let Numero3 = 30

let Media = (Numero1+Numero2+Numero3)/3
console.log("Media dos numeros:",Media)

//- 6 *Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.*

let Diadasemana
 Diadasemana = 2

if (Diadasemana ==1 ){
    console.log("Domingo")
}

else if (Diadasemana ==2){
    console.log("Segunda")
}

else if (Diadasemana ==3){
    console.log("Terça")
}

else if (Diadasemana ==4){
    console.log("Quarta")
}

else if (Diadasemana ==5){
    console.log("Quinta")
}

else if (Diadasemana ==6){
    console.log("Sexta")
}

else if (Diadasemana ==7){
    console.log("Sábado")
}


//- 7 *Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".*

let Primeironumero
let Segundonumero

Primeironumero = 4
Segundonumero = 5

if (Primeironumero < Segundonumero){
    console.log("o primeiro numero digitado é menor que o segundo")
}

else if (Segundonumero < Primeironumero){
    console.log("o segundo numero digitado é menor que o primeiro")
}

else {
    console.log("os números são iguais")
}

//- 8 *João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, mostrar o excesso e o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.*

let peso = 50

if (peso < 50){
    let excesso = 0
    let multa = 0
    console.log("excesso:", excesso, "multa:", multa)
}else {
     excesso = peso - 50
     multa = excesso * 4
    console.log("excesso:",excesso, "multa:", multa)
}
