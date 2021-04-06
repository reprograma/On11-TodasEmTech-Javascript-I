
//======================================================= OPÇÃO 1
//Cálculo de média

/*let a = 3;
let b = 5;
let c = 7;

let media = (a+b+c)/3;
console.log(media);
*/

//======================================================= OPÇÃO 2

/* Recebendo dos usuários e mostrando no console:

let a =prompt("Digite o primeiro número: ");

let b =prompt("Digite o segundo número: ");

let c =prompt("Digite o terceiro número: ");


let media = ((parseInt(a) + parseInt(b) + parseInt(c))/3).toFixed(1);
console.log("A média entre os números é: ",media);
*/

//======================================================= OPÇÃO 3

// Pelo navegador:

let num1 = document.querySelector("#numero-1")

let num2 = document.querySelector("#numero-2")

let num3 = document.querySelector("#numero-3")

var valor_media = document.querySelector("#resposta")

function media(){
   
    valor_media.innerHTML =((num1.valueAsNumber + num2.valueAsNumber + num3.valueAsNumber)/3).toFixed(1);
}

