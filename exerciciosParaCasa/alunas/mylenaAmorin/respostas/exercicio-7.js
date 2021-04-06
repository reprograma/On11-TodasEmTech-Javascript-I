function sete() {
    var num1 = document.getElementById("nnum1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(num1 > num2){
        console.log(`O primeiro número é o maior.`)
    }
    else if(num1 < num2){
        console.log(`O segundo número é o maior.`)
    }
    else if(num1 == num2){
        console.log(`Os números são iguais.`)
    }
}