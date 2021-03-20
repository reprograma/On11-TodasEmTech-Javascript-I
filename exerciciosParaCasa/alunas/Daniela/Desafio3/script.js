let pesoPeixe = prompt("Informe o peso do peixe: ");

if (pesoPeixe <= 50){
    alert("Peso dentro do estabelecido pelo regulamento do Estado de Sao Paulo");
    
} else{
  let excesso = (pesoPeixe - 50)*4;
  alert("Valor a pagar pelo excesso: " + excesso +",00");
}