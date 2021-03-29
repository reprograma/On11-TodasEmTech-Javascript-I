

let dia = 0;
let NomedoDia = document.querySelector("#dia");


function Chamardia(){

    dia ++;
    if( dia ==1 ){


        NomedoDia.textContent = "Domingo";
    } else if ( dia==2){

        NomedoDia.textContent = "Segunda"

    } else if ( dia==3){

        NomedoDia.textContent = "Terça"

    } else if ( dia==4){

        NomedoDia.textContent = "Quarta"

    }  else if ( dia==5){

        NomedoDia.textContent = "Quinta"

    } else if ( dia==6){

        NomedoDia.textContent = "Sexta"
       

    } else if ( dia==7){

        NomedoDia.textContent = "Sabado"
        dia =0;

    } 
    










}
