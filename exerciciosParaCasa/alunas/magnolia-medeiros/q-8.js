const pesoRegulamento = 50
const valorMulta = 4.00

let pesoPeixe = 55
let excesso = (Math.abs(pesoRegulamento - pesoPeixe))
let valorFinal = (excesso * valorMulta)

if (pesoPeixe > pesoRegulamento) {
    console.log(`Peso: ${pesoPeixe}`)
    console.log(`Excedente: ${excesso}`)
    console.log(`Total da multa R$: ${valorFinal}`)
} else {
    console.log(`Peso: ${pesoPeixe}`)
    console.log(`Excedente: 0`)
    console.log(`Total da multa R$: 0`)
}