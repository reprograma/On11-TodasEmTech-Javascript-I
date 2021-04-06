// Exercício para casa nº 6:

// *Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.*

const diaDaSemana = 7;

let resultadDoDia;

switch (diaDaSemana) {
    case 1:
        resultadDoDia = "Domingo";
        console.log(`O dia selecionado é: ${resultadDoDia}`);
        break;
    case 2:
        resultadDoDia = "Segunda";
        console.log(`O dia selecionado é: ${resultadDoDia}`);
        break;
    case 3:
        resultadDoDia = "Terça";
        console.log(`O dia selecionado é: ${resultadDoDia}`);
        break;
    case 4:
        resultadDoDia = "Quarta";
        console.log(`O dia selecionado é: ${resultadDoDia}`);
        break;
    case 5:
        resultadDoDia = "Quinta";
        console.log(`O dia selecionado é: ${resultadDoDia}`);
        break;
    case 6:
        resultadDoDia = "Sexta";
        console.log(`O dia selecionado é: ${resultadDoDia}`);
        break;
    case 7:
        resultadDoDia = "Sábado";
        console.log(`O dia selecionado é: ${resultadDoDia}`);
        break;
        default:
        console.log("DIA INVÁLIDO");           
}

