/* 6 *Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.*/

const input=require('readline-sync')

const numeroDiaDaSemana = input.question('Digite um numero de 1 a 7: ')

if(numeroDiaDaSemana == 1){
    console.log('Hoje é Segunda-Feira');
}
    else if(numeroDiaDaSemana == 2){
    console.log('Hoje é Terça-Feira');
}
        else if(numeroDiaDaSemana == 3){
        console.log('Hoje é Quarta-Feira');
}
            else if(numeroDiaDaSemana == 4){
            console.log('Hoje é Quinta-Feira');
}
                else if(numeroDiaDaSemana == 5){
                console.log('Hoje é Sexta-Feira');
}                  
                    else if(numeroDiaDaSemana == 6){
                    console.log('Hoje é Sábado');
}                       
                        else if(numeroDiaDaSemana == 7){
                        console.log('Hoje é Domindo');
}
else{
    console.log('O número digitado não corresponde a nenhum dia da semama');
}