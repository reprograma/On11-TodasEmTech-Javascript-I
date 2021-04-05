let pesoDoPeixe = 63.45
let multa = (pesoDoPeixe - 50)*4
let multaFix = multa.toFixed(2)
if (pesoDoPeixe>50) {
    console.log(`Valor da multa: R$ ${multaFix}`)
} else if (pesoDoPeixe<=50){
    console.log("ZERO")
}
