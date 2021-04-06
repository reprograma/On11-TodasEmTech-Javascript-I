let num1 = document.querySelector("#numero-1")


var dia = document.querySelector("#resposta")

function semana(){

    if (num1.valueAsNumber== 1){
        dia.innerHTML = "Domingo";
    } else if (num1.valueAsNumber== 2){
        dia.innerHTML = "Segunda";
    } else if (num1.valueAsNumber== 3){
        dia.innerHTML = "Terça";
    } else if (num1.valueAsNumber== 4){
        dia.innerHTML = "Quarta";
    } else if (num1.valueAsNumber== 5){
        dia.innerHTML = "Quinta";
    } else if (num1.valueAsNumber== 6){
        dia.innerHTML = "Sexta";
    } else if (num1.valueAsNumber== 7){
        dia.innerHTML = "Sábado";
    } else{
        dia.innerHTML = "Número inválido, por favor digite um número entre 1 e 7."
    }
   
}

