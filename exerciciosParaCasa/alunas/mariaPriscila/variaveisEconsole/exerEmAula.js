
// string e const - texto e variavel constante 
const nome = "Priscila";
console.log ("nome da pessoa: ", nome);
console.log(typeof(nome), "Priscila")

// let e number - variável 'variável' números
let idade = 27;

idade = idade + 1;

console.log("idade da pessoa: ", idade);
console.log(typeof(idade), 28)

// boolean - recebe vdd ou falso
let maravilhosa = true;

console.log ("pessoa é maravilhosa? ", maravilhosa);
console.log(typeof(maravilhosa), true)

maravilhosa = "feijoada veganda"

console.log (maravilhosa, typeof(maravilhosa));

maravilhosa = true

// template string ou concatenando texto
console.log(`a pessoa ${nome} de idade ${idade} é maravilhosa? ${maravilhosa}`)

// "a pessoa " + nome "de idade " + " é maravilhosa? " + maravilhosa

// alt + z = pra ver o conteúdo da linha

// tipo indefinido
let telefone;
console.log(typeof(telefone))

// tipo nulo
telefone = null
console.log(typeof(telefone))