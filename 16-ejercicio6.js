'use strict'
/* Que nos diga si un número es par o impar
1. Ventana Promt
2. Si no es válido lo introducido que lo vuelva a introducir */

var n1;

while(isNaN(n1)){
    n1 = parseInt(prompt("n1: "));    
}

if(n1%2==0){
    console.log(n1 + " es PAR");
} else {
    console.log(n1 + "es ImPar");
}

