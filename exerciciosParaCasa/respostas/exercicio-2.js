const myName = 'Default';    
myName = 'Chris';
//o problema pode ser resolvido colocando o nome 'Chris dentro da const, 
//porque o valor da constante será o primeiro adicionado a ela;
//também pode-se definir a variavel myName como let ou var ao invés de const;

let myAge = '42';

console.log(myName);    
console.log(\`In 20 years, I will be ${myAge + 20}`);
//e o problema na hora de imprimir a frase no console pode ser resolvido tirando o \;

//código corrigido:
 
const myName = 'Chris';    
myName = 'Chris';

let myAge = '42';

console.log(myName);    
console.log(`In 20 years, I will be ${myAge + 20}`);
