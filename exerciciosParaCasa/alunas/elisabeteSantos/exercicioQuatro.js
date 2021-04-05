/*4 *Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado:*
    - caso 1: 12 dias e 320 km; 
    - caso 2: 6 dias e 390km; */

    let custoCarroDia = 60;
    let custoKmRodado = 0.15;

    //CASO 1:
    const total1 = (custoCarroDia * 12) + (custoKmRodado * 320);
        console.log('O preço a pagar por 12 dias com o carro é: ' + total1 + ' R$');

    //CASO 2:
    const total2 = (custoCarroDia * 6) + (custoKmRodado * 390);
        console.log('O preço a pagar por 6 dias com o carro é ' + total2 + ' R$');
