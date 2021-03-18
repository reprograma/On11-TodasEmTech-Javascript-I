let pesoDePeixes = 40

if (pesoDePeixes > 50) {
    excessoDePeixes = pesoDePeixes - 50
    valorAPagar = excessoDePeixes * 4
    console.log(`Houve o excesso de ${excessoDePeixes} e o valor é de R$ ${valorAPagar}`)
}
if (pesoDePeixes < 50) {
    excessoDePeixes = "ZERO"
    valorAPagar = "ZERO"
    console.log(`Houve ${excessoDePeixes}, portanto ${valorAPagar} reais a pagar`)
}