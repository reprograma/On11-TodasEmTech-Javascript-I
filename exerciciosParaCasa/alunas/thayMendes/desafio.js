const numero = 1;

if (numero == 1){
    console.log("Domingo")

}
else if ( numero == 2){
    console.log ('Segunda')

}
else if ( numero == 3){
    console.log ('Terca')

}
else if ( numero == 4){
    console.log ('Quarta')

}
else if ( numero == 5){
    console.log ('quinta')

}
else if ( numero == 6){
    console.log ('sexta')

}
else if  ( numero == 7){
    console.log ('sabado')
}

/* -------------------------*/
let num1= 7
let num2= 7

if (num1>num2){
    console.log(num1, "é maior que ", num2)
}
else if (num1<num2){
    console.log(num2, "é maior que ", num1)
}
else if( num2 == num1){
    console.log(num2, "é igual a ", num1)
}
/* -------------------------*/

const pesoAutorizado = 50.0;
const multaKl= 4.00;
let pesoPeixe = 60.5;

if (pesoPeixe > pesoAutorizado){

    var excesso = pesoPeixe-pesoAutorizado
    var valorExcesso = (pesoPeixe-pesoAutorizado) * multaKl
    
    console.log("Seu peixe excedeu", excesso,"kg, e o valor da multa é R$:",valorExcesso)

}else {
    console.log("multa é 0,00")
}