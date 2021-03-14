
// Exercicio -1

let meuNome = "Beatriz"
let minhaIdade = 23
meuNome = "Jane"

console.log("Exercicio 1")
console.log (` Minha idade é  ${minhaIdade} e meu nome é ${meuNome}`);
console.log("...")
// Exercicio -2

let myName = "Defaut" // alterando uma const para var para evitar o conflito do nome
 myName = "Chris"

let myAge = 42  // ao inves de decrarar  o dado como String, já o declaro como Number


console.log("Exercicio 2")
console.log (` In 20 years, I will be ${myAge + 20} `)
console.log("...")

// exercicio - 3
let calculadora = 10+5
calculadora++
calculadora *= 3

console.log("Exercicio 3")
console.log(` Valor da calculadora ${calculadora} `) 
console.log("...")

// exercicio 4
let valorPorDia = 60.00
let valorPorKm = 0.15
let primeiroCasoDia = 12
let segundoCasoDia = 6
let primeiroCasoKm = 320
let segundoCasoKm = 390
let valorDoPrimeiroCaso = (valorPorDia * primeiroCasoDia) + (valorPorKm * primeiroCasoKm)
let valorDoSegundoCaso = (valorPorDia * segundoCasoDia) + (valorPorKm * segundoCasoKm)

console.log("Exercicio 4")
console.log(` Caso 1 valor a pagar R$ ${valorDoPrimeiroCaso.toFixed(2)}  |  Caso 2 valor a pagar R$ ${valorDoSegundoCaso.toFixed(2)  } `) 
console.log("...")

// exercicio 5
let usuarioNumero1 = 3
let usuarioNumero2 = 5
let usuarioNumero3 = 8

let usuarioMedia = (usuarioNumero1 + usuarioNumero2 + usuarioNumero3) / 3 

console.log("Exercicio 5")
console.log(`  A media dos numeros " ${usuarioNumero1} " ,  " ${usuarioNumero2} "  e  " ${usuarioNumero3} " é: ${usuarioMedia.toFixed(1)}`) 
console.log("...")


//  Exercicio 6 em algoritimos

 console.log("Exercicio 6 - Dia 1")

 let diaEscolhido = 1

     if ( diaEscolhido == 1) {
        console.log("Domingo")
     }
    else if ( diaEscolhido == 2) {
        console.log("Segunda")
    }
    else if ( diaEscolhido == 3) {
        console.log("Terça")
    }
    else if ( diaEscolhido == 4) {
        console.log("Quarta")
    }
    else if ( diaEscolhido == 5) {
        console.log("Quinta")
    }
    else if ( diaEscolhido == 6) {
        console.log("Sexta")
    }
    else if ( diaEscolhido == 7) {
        console.log("Sabado")
    }
    else {
        console.log("Dia invalido")
    }
    

console.log("...")

// exercicio 7
 let AlgodaoDoceQuantidade = 10
 let AlgodaoDoceDeMorandoQuantidade = 10

 console.log("Exercicio 7")
 if (AlgodaoDoceDeMorandoQuantidade===AlgodaoDoceDeMorandoQuantidade) {
     console.log("Os numeros são iguais")
 }
 else {
    console.log("Os numeros não gitsão iguais")
 }
 console.log("...")

 console.log(" Exercicio 8 - peso 50,2 kilos")

 let multaPorQuiloExcedente = 4
 let limiteDeQuilos = 50
 let pesoDoPeixe = 50.2;


 if (pesoDoPeixe > 50) {
     let calcularMulta = (pesoDoPeixe - limiteDeQuilos) * multaPorQuiloExcedente ;
     console.log(` Valor da multa R$ ${calcularMulta.toFixed(2)}`)
 }
 else {
    console.log("João não precisa pagar multa")
 }


