/*- 4 *Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado:*
    - caso 1: 12 dias e 320 km; 
    - caso 2: 6 dias e 390km; */

    let carro;
    let km;
    carro= 60.00;
    km=0.15;
    console.log('Caso 1: O valor de 12 dias com carro e 320 km rodados custa: R$', (carro*12)+(km*320.00));
    console.log('Caso 2: O valor de 6 dias com carro e 390 km rodados custa: R$',(carro*6)+(km*390.00));