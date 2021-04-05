
function calcular(){
    valor1 = document.querySelector("#valor1").value;
    valor2 = document.getElementById("valor2").value;
    valor3 = document.getElementById("valor3").value;
    result = document.getElementById("result"); 

    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    valor3 = parseFloat(valor3);
    console.log(valor2);
    console.log(valor3);
    var resultado = valor1 + valor2 + valor3;
    resultado = (resultado / 3).toFixed(2);
    console.log(resultado);
    result.innerHTML = resultado;
}