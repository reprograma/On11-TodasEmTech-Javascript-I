// Exercício para casa nº 8:

/* 
 * João, Pescador, comprou um microcomputador para controlar
 * o rendimento diário de seu trabalho. Toda vez que ele traz 
 * um peso de peixes maior que o estabelecido pelo regulamento de
 * pesca do estado de São Paulo (50 quilos) deve pagar uma multa
 * de R$ 4,00 por quilo excedente. João precisa que você faça um
 * programa que leia a variável peso (peso de peixes) e verifique
 * se há excesso. Se houver, mostrar o excesso e o valor da multa
 * que João deverá pagar. Caso contrário mostrar tais variáveis 
 * com o conteúdo ZERO.*
 * 
 **/

var pesoMax = 50
var multa = 4;
let pesoDoPeixe = 61;

function calculoDeMulta(pesoDoPeixe) {    
    const resultado = pesoDoPeixe - pesoMax
    const valorDaMulta = Math.floor(resultado) * multa;
    return valorDaMulta;
}

if( pesoDoPeixe <= 50 ) {
    console.log(`Você não excedeu o limite de peso em peixe que é de ${pesoMax}Kg`);
} else{
    console.log(`ATENÇÃO! O limite máximo do peso do peixe é de ${pesoMax}Kg`);
    console.log(`Você EXCEDEU o limite máximo do peso do Peixe em ${pesoDoPeixe - pesoMax}Kg`);
    console.log(`MULTADO EM ${calculoDeMulta(pesoDoPeixe).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
}
