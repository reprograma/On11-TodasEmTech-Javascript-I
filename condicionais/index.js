// diga pra eu, se o número é par ou é ímpar, por favor:

const numero = prompt("Digite um número:"); 

if (numero % 2 === 0) {
    alert("o número é par ! :)")
} else {
    alert("o número é ímpar ! :)")
}

// crie um programa que se a aluna tirou uma nota maior ou igual a 6 imprima "APROVADA", se for maior ou igual a 5 imprima "RECUPERAÇÃO" se não for nenhuma das duas imprima "REPROVADA"

let nota = prompt("Digite uma nota: ");

if (nota >= 6){
    console.log("APROVADA")
} else if (nota >= 5) {
    console.log("RECUPERAÇÃO")
} else {
    console.log("REPROVADA")
}