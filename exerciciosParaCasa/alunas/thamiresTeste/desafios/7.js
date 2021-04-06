let num1 = document.querySelector("#numero-1")

let num2 = document.querySelector("#numero-2")

var result = document.querySelector("#resposta")

function compara(){
   
    if(num1.valueAsNumber> num2.valueAsNumber){

        result.innerHTML = `O maior número é: ${num1.valueAsNumber}` 

    }else if(num1.valueAsNumber< num2.valueAsNumber){

        result.innerHTML = `O maior número é: ${num2.valueAsNumber}` 
    } else{
        result.innerHTML = 'Os números são iguais.'
    }
}