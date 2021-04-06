// Preço a pagar

let diaAluguel = 60;
let kmRodado = 0.15;

//Caso 1: 12 dias e 320 km

let dias = 12;
let dist = 320;

let custo = (dias*diaAluguel) + (dist*kmRodado);

console.log(`O custo total no primeiro caso é de R$ ${custo}.00 reais`);

//Caso 2: 6 dias e 390km
dias = 6;
dist = 390;

custo = (dias*diaAluguel) + (dist*kmRodado);

console.log(`O custo total no segundo caso é de R$ ${custo}0 reais`);

