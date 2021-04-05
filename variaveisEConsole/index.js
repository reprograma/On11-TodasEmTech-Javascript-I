//string e const - texto e variável constante
const nome = "Mari Lima";


console.log("hello world")
    /* 
    comentários
    */
console.log("nome da pessoa: ", nome);
console.log(typeof(nome), "Mari Lima");

//let e number - variável 'variável' números
let idade = 25;
idade = idade + 1;
console.log("idade da pessoa: ", idade);
console.log(typeof(idade), 26);

// boolean - que recebe verdadeiro ou falso
let maravilhosa = true;
console.log("pessoa é maravilhosa? ", maravilhosa);
console.log(typeof(maravilhosa), true);

maravilhosa = "feijoada vegana";

console.log(maravilhosa, typeof(maravilhosa));
maravilhosa = true;

//template string ou concatenando texto
console.log(`a pessoa ${meuNome} de idade ${minhaIdade} é maravilhosa? ${maravilhosa} `);
// "a pessoa " +nome + "de idade " + idade + " é maravilhosa? " + maravilhosa 

//alt + z = pra ver todo conteúdo da linha

//tipo indefinido
let telefone;
console.log(typeof(telefone))
    //tipo nulo
telefone = null;
console.log(typeof(telefone)) // significa valor especial - nenhum objeto
