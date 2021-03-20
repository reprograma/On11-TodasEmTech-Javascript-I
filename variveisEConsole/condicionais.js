// diga  se o número é par ou impar 

const numero = 19;

if (numero % 2 === 0) {
  console.log("o número é par! :)")
} else {
 console.log("o número é ímpar! :)")
}

// crie um programa que se a aluna tirou uma nota maior ou igual a 6 imprima "APROVADA", se for maior  ou igual a 5 imprima "RECUPERAÇÃO", se não for nenhuma das duas imprima "REPROVADA"

let nota = 7
if (nota >= 6){
 console.log("APROVADA")
} else if (nota >= 5) {
  console.log("RECUPERAÇÃO")
} else {
  console.log ("REPROVADA")
}