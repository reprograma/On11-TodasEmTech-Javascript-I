//8 *João, Pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. 
//João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso. Se houver, mostrar o excesso e o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO.*

function exercicioOito() {
    console.log("Digite a quantidade de quilos da pescaria do dia:");
    let pescado = parseFloat(console.log());

    if (pescado > 50) {
        let valorAdicional = (pescado - 50);
        let extra = valorAdicional * 4;
        console.log("A multa a ser pago é de R$", extra);
    }
    else {
        console.log("Sem multa!");
    }
}
