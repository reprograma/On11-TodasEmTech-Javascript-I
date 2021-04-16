let peso = 80

if(peso>50){
    console.log("O peso foi excedido, e você pagará multa.")
}else{
    console.log("O peso não ultrapassou e você não pagará multa.")
}
let pesoultrapassado = peso-50
console.log("O excesso de peixes são",pesoultrapassado, "quilos.")

let multa = pesoultrapassado*4
console.log("O valor da multa é R$",multa, "reais.")