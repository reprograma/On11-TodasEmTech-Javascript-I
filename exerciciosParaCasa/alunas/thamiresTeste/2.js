/* 
Código com  erros:

const myName = 'Default';    
myName = 'Chris';   <---------- Uma variável do tipo CONST está sendo reatribuída. Isto é um problema.

let myAge = '42'; <---- Para ser concatenado, o inteiro também não deve ser declarado com aspas.
--- dessa forma, ao concaternamos, a saída será "4220" e não 62, como espera-se.

console.log(myName);    
console.log(\`In 20 years, I will be ${myAge + 20}`);   <--- Aqui há um erro de sintaxe com a "\" no início do console.log

--------c o r r i g i n d o: ------------
*/

let myName = 'Default';
myName = 'Chris';

myAge = 42;
console.log(myName);

console.log(`In 20 years, I will be ${myAge +20}`); 
 // atenção que a sintaxe do template string é um acento: ` e não uma aspas simples (-.-)'

 
