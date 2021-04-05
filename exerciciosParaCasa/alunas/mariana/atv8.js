/*João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, mostrar o excesso e o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.*/

let pesca = 50;

if (pesca > 50) {
   let excedente = pesca - 50 
   let multa = excedente * 4
   console.log ("Você terá que pagar R$ " + multa.toFixed(2) + " de multa")
}

else {
  
   let multa = 0
    console.log (multa)
}

