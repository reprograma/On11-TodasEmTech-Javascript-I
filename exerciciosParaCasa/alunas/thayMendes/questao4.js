const valorDia = 60.0
const valorKm = 0.15


function calcDias(dias){
    return parseFloat(dias) * valorDia;
}
function calcKm (km){
    return parseFloat(km) * valorKm;  
}

function calculoValorTotal(dias, km){
	return calcDias(dias) + calcKm (km);
}

let resultadoCarro1 = calculoValorTotal(12, 320)
console.log ("Valor do carro 1: ", resultadoCarro1)

let resultadoCarro2 = calculoValorTotal(6, 390)
console.log ("Valor do carro 2: ", resultadoCarro2)