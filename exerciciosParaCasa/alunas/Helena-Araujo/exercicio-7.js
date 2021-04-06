let primNum = Number(window.prompt("Insira um número: "))
let segNum = Number(window.prompt("Insira outro número: "))

if (primNum > segNum) {
    alert(`O primeiro número (${primNum}) é maior.`)
    console.log(`O primeiro número (${primNum}) é maior.`)
}
if (segNum > primNum){
    alert(`O segundo número (${segNum}) é maior.`)
    console.log(`O segundo número (${segNum}) é maior.`)
}
if (primNum == segNum) {
    alert("Os números são iguais.")
    console.log("Os números são iguais.")
}