let pesoPeixe = 48
let multaPeixe = 4
let excesso = pesoPeixe - 50
let pesoFinal = 0

if (pesoPeixe > 50){
    pesoFinal = excesso * multaPeixe
    console.log('A sua pesagem foi de', pesoPeixe, 'kg, logo pagará multa de R$',pesoFinal);
} else {
    pesoFinal = pesoPeixe
    console.log('A sua pesagem foi de', pesoFinal, 'kg por isso não pagará multa.')
}
