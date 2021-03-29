


let  horasdormidas = 0;
let passosParaDireita = 0;
let passosParaesquerda =0;
let passosParafrente =0;
let sentarnovaso = false;
let levantar = false;
let  bexigacheia = false;
let tempoquedormi = document.querySelector("#acordei");
let iraoBanheiro = document.querySelector("#banheiro");
let xixi = document.querySelector("#xixi");
let escovar = document.querySelector("#escovar");
let btText = document.querySelector("button");








 function acordar(){

 btText.textContent= "Estou acordada";
  while ( horasdormidas <=  7){

    horasdormidas ++;
  }

  if( horasdormidas = 8 )
  {
    
    bexigacheia = true;
    levantar = true;

    tempoquedormi.textContent = "Depois de dormir " + horasdormidas+ " horas eu acordei, levantei e quero fazer xixi";
    andarAteoBanheiro()

  }

 

   }

 
function andarAteoBanheiro (){
   
  while (passosParaDireita <= 2){
    passosParaDireita ++;
  }
  if(passosParaDireita == 3 ){
    while(passosParaesquerda <= 4){
      passosParaesquerda ++;

    } 
    if ( passosParaesquerda == 5){
      sentarnovaso = true;
      iraoBanheiro.textContent = "Andei "+ passosParaDireita + " passos para a direita  e depois " + passosParaesquerda + " para esquerda até chegar ao Banheiro";
    esvaziarbexiga()
    }

   

  }


}
   function esvaziarbexiga(){
       passosParaesquerda = 0;
       passosParaDireita = 0;
    if( sentarnovaso == true){
      bexigacheia = false;
      console.log(bexigacheia)
    
    } 


     if ( bexigacheia == false ) {
       
     sentarnovaso = false;

     xixi.textContent = "Sentei no vaso, esvaziei a bexiga e depois me levantei";
     escovarosdentes()

    }
     
    

   }
   function escovarosdentes(){
     while( passosParaDireita <= 1)   
     { passosParaDireita ++; }
     if(passosParaDireita == 2){
       while(passosParafrente <=2){
         passosParafrente ++;
       }
     }

     if(passosParafrente ==3 ){
      
      escovar.textContent = " Depois de andar " + passosParaDireita+ " passos para direita e "+
      passosParafrente + " passos parar frente  cheguei até a pia, peguei a escova e escovei meus dentes"

     }


   }
  
   


   
