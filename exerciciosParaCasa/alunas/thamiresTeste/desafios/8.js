let num1 = document.querySelector("#numero-1")

var result = document.querySelector("#resposta")

function joao(){
    let excesso = num1.valueAsNumber - 50;
    console.log(typeof(excesso));
    if(excesso> 0){
        result.innerHTML = `Ops! Você ultrapassou o limite em ${excesso} quilos e tem que pagar uma multa no valor de: R$ ${excesso*4},00 reais.`;
    }else{
        result.innerHTML = "Não há excesso de peso ou multas pendentes." 
    }
}