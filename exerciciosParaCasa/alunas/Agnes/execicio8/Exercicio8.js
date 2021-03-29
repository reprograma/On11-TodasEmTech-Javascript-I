

let valoMulta = document.querySelector("#multa");
let Excesso = document.querySelector("#Excesso");


function Calcular(){

    let kgPeixe = document.querySelector("#Kg");

 if( kgPeixe.value >50){
    Excesso.textContent = "O peso excedente foi: "+  (kgPeixe.value -50)+"Kg";
    valoMulta.textContent = "Você terá que pagar: " + (kgPeixe.value-50)*4 +"R$";
     




 } else {  Excesso.textContent = "Você não excedeu o limite"; 
         valoMulta.textContent  = "Não haverá multa";

}





}