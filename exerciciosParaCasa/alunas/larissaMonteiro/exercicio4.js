

function calculaDia(quantDias){
    const valorCarroDia=60
    return valorCarroDia*quantDias
}
function calculaKm (quantKm){
    const valorKm= 0.15
    return valorKm*quantKm
}
function calcValorCarro (numDias,numKm){
    return calculaDia(numDias)+calculaKm(numKm)
}

console.log(calcValorCarro(12,320));
console.log(calcValorCarro(6,390));
