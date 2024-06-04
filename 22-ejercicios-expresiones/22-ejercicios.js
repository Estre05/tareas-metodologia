"use strict";

let año=Number(prompt("Ingrese el año de nacimiento"));
let calculoFechaNacimiento=function(año){
    return 2024-año;
}
alert ("Su edad es de " + calculoFechaNacimiento(año) + " años");


function tablamultiplicar(a){let a=prompt("Ingrese el numero");
let tabla = "";
for(let i=1; i<=10; i++);{
    tabla += '${a} * ${i}=${a * 1}\n';
}
return tabla;
}
//lamamos la funcion
alert (tablamultiplicar());


let a= Number("Ingrese la temperatura");
const b=30;
let temp =(a,b) => a + b;
let result = temp (a,b);
alert (result);

