
let meuNome 

/*
    - Declare uma variável chamada meuNome.

    - Inicialize meuNome com um valor adequado em uma linha separada (você pode usar seu nome real ou qualquer outra coisa).
ade e inicialize-a com um valor, na mesma linha.

    - Declare uma variável chamada minhaId
    - Adicione uma nova linha para alterar o valor armazenado na variável meuNome existente por outro nome.

    - Mostre no console o valor da variável minhaIdade e da variável meuNome
*/

meuNome = "mariah"
let minhaIdade = 50
meuNome = 'julia'

console.log(minhaIdade+meuNome)

/* 2 *O código abaixo possui dois erros. O console deve exibir o nome Chris, e uma declaração sobre quantos anos Chris terá daqui a 20 anos. Como você pode corrigir o problema e corrigir a saída?*

     const myName = 'Default';    
     myName = 'Chris';

     let myAge = '42';

     console.log(myName);    
     console.log(\`In 20 years, I will be ${myAge + 20}`);

*/

let myName = 'Default';    
     myName = 'Chris';

     let myAge = 42;

     console.log(myName);    
     console.log(`In 20 years, I will be ${myAge + 20}`);

/*3 *Execute as seguintes tarefas: 1.Declare uma nova variável chamada 'calculadora', e adicione uma instrução somando os valores 10 e 5.*
    - Incremente 1 à variável 'calculadora', usando o operador de soma abreviado.
    - Atribua à variável 'calculadora' seu próprio valor multiplicando por 3, usando o operador de multiplicação abreviado.
    - Mostre o valor de 'calculadora' no console.
*/

let calculadora = 10+5
calculadora ++

calculadora *=3
console.log(calculadora)

/*4 *Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado:*
    - caso 1: 12 dias e 320 km; 
    - caso 2: 6 dias e 390km; 
*/

let carro = 60
let kmRodado = 0.15

let caso1 = (12*carro) + (320*kmRodado)
let caso2 = (6*carro) + (390*kmRodado)

console.log(caso1,caso2)

// 5 *Receba do usuários 3 números ou crie variaveis com 3 números, e calcule a média entre eles.*

let variavel1 = 10
let variavel2 = 20
let variavel3 = 30

let media = (variavel1 + variavel2 + variavel3) / 3

console.log(media)


