/*- 2 *O código abaixo possui dois erros. O console deve exibir o nome Chris, 
e uma declaração sobre quantos anos Chris terá daqui a 20 anos. 
Como você pode corrigir o problema e corrigir a saída?*

     const myName = 'Default';    Primeiro erro, trocar por let
     myName = 'Chris';

     let myAge = '42'; variável texto, deveria ser número porque depois vamos somar

     console.log(myName);    
     console.log(\`In 20 years, I will be ${myAge + 20}`); Essa barra também representa um erro no código final
*/
let myName    
myName = 'Chris'

let myAge = 42

console.log(myName)   
console.log(`In 20 years, I will be ${myAge + 20}`)