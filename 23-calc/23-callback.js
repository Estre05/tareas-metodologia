"use strict";

let suma= function (a,b){
    suma= a + b;
}
let resta = (a,b) => a - b;

function calc(op, fnsuma, fnresta);
let number1 = Number(prompt("Ingrese el primer numero: "))
let number2 = Number(prompt("Ingrese el primer numero: "))
if (op === "suma"){
    fnsuma(number1,number2)
}else{
    alert(fnresta(number1,number2))
}
 calc ("suma", suma, resta);
