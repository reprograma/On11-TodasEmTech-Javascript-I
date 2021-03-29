/***Exercícios desafios**
- 6 *Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.*/

const input=require('readline-sync')

const numeroDiaDaSemana = input.question('Digite um numero de 1 a 7: ')

if(numeroDiaDaSemana == 1){
    console.log('Segunda-Feira');
}
    else if(numeroDiaDaSemana == 2){
    console.log('Terça-Feira');
}
else if(numeroDiaDaSemana == 3){
    console.log('Quarta-Feira');
}
else if(numeroDiaDaSemana == 4){
    console.log('Quinta-Feira');
}
else if(numeroDiaDaSemana == 5){
    console.log('Sexta-Feira');
}                  
 else if(numeroDiaDaSemana == 6){
    console.log('Sábado');
}                       
else if(numeroDiaDaSemana == 7){
    console.log('Domingo');
}
else{
    console.log('O número digitado não corresponde a nenhum dia da semama');
} 