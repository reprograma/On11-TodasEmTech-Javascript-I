//1 *Execute as seguintes tarefas:*
    //- Declare uma variável chamada meuNome.

    // Inicialize meuNome com um valor adequado em uma linha separada (você pode usar seu nome real ou qualquer outra coisa).

    // Declare uma variável chamada minhaIdade e inicialize-a com um valor, na mesma linha.

    //Adicione uma nova linha para alterar o valor armazenado na variável meuNome existente por outro nome.

    //Mostre no console o valor da variável minhaIdade e da variável meuNome

    let meuNome
    meuNome = "Ana"

    let minhaIdade = 41

    meuNome = "Nascimento"
    console.log("nome:", meuNome)
    console.log("minhaIdade:", minhaIdade)



    //2 *O código abaixo possui dois erros. O console deve exibir o nome Chris, e uma declaração sobre quantos anos Chris terá daqui a 20 anos. Como você pode corrigir o problema e corrigir a saída?*

     //const myName = 'Default';    
     //myName = 'Chris';

     //let myAge = '42';

     //console.log(myName);    
     //console.log(\`In 20 years, I will be ${myAge + 20}`);

     // mudou const para let
     let myName = 'Default';
     myName = "Chris";
     
     // retirou as aspas
     let myAge = 42
     console.log("name:", myName)
     console.log(`In 20 years, I will be ${myAge + 20}`)


     //3 *Execute as seguintes tarefas: 1.Declare uma nova variável chamada 'calculadora', e adicione uma instrução somando os valores 10 e 5.*
    //- Incremente 1 à variável 'calculadora', usando o operador de soma abreviado.
    //- Atribua à variável 'calculadora' seu próprio valor multiplicando por 3, usando o operador de multiplicação abreviado.
    //- Mostre o valor de 'calculadora' no console.

    let calculadora
    calculadora = 10 + 5
    calculadora ++
    //calculadora = a calculadora + 1
    calculadora *=3
    //calculadora e = a calculadora multiplicado por 3
    console.log("o resultado é:", calculadora)


    //4 *Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado:*
    //- caso 1: 12 dias e 320 km; 
    //- caso 2: 6 dias e 390km; 

    let caso1d = 12
    let caso1km = 320

    let caso2d = 6
    let caso2km = 390

    let resultadocaso1 = (60*caso1d) + (0.15*caso1km)
    let resultadocaso2 = (60*caso2d) + (0.15*caso2km)
    console.log("caso1:", resultadocaso1)
    console.log("caso2:", resultadocaso2)


   // 5 *Receba do usuários 3 números ou crie variaveis com 3 números, e calcule a média entre eles.*


   let numero1 = 6
   let numero2 = 8
   let numero3 = 10


   let média = (numero1 + numero2 + numero3)/3
   console.log("média dos numeros:", média)


   //6 *Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.*


   let diadasemana
   diadasemana = 1

   if (diadasemana == 1){
       console.log("domingo")
   }
   else if (diadasemana == 2){
       console.log("segunda")
   }
   else if (diadasemana == 3){
       console.log("terça")
   }
   else if (diadasemana == 4){
       console.log("quarta")
   }
   else if (diadasemana == 5){
       console.log("quinta")
   }
   else if (diadasemana == 6){
       console.log("sexta")
   }
   else if (diadasemana == 7){
       console.log("sábado")
   }


   //- 7 *Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".*


   let primeironumero = 2
   let segundonumero = 4

   if (primeironumero > segundonumero){
       console.log("o primeiro numero é maior que o segundo")
   }
else if ("segundonumero > primeironumero"){
    console.log("o segundo numero é maior que o primeiro")
}
else {
    console.log("os numeros são iguais")
}


//- 8 *João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, mostrar o excesso e o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.*


let peso = 50
if (peso > 50){
let excesso = 0
let multa = 0
console.log("execesso:",excesso, "multa:", multa)
}
else {
    excesso = peso - 50
    multa = excesso * 4
    console.log("excesso:",excesso, "multa:", multa)
}









