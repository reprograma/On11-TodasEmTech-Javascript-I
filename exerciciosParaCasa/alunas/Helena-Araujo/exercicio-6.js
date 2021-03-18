let numSemana = Number(window.prompt("Insira um número de 1 à 7: "))
let diaSemana = [,"Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","Domingo"]

if (numSemana < 8 && numSemana > 1) {
    alert(`O dia da semana equivalente é: ${diaSemana[numSemana]}`)
}
else alert("É preciso de um número de 1 à 7.")