//calculo do valor a pagar  de acordo com a quilometragem rodada

let dias1=12;
let dias2=6;
let valorPordia=60.00;
let quilometro1=320;
let quilometro2=390;
let custoQuilometro=0.15;

let caso1=(valorPordia * dias1) + (custoQuilometro * quilometro1);
let caso2=(valorPordia * dias2) + (custoQuilometro * quilometro2);

console.log(" O carro rodando"+ " "+quilometro1  + " " + "KM"  + " " + "ele pagaará R$" +" " + caso1);
console.log(" O carro rodando"+ " "+quilometro2  + " " + "KM"  + " " + "ele pagaará R$" +" " + caso2);

