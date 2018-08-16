'use strict'

//tabla de multiplicar de un número introducido por pantalla

//var n1 = parseInt(prompt("n1: "));

var i = 1;
var j = 1;

/*
//tabla de un número en concreto
for(i;i<=10;i++){
    document.write(i + " + " + n1 + " = " + (i*n1) + "<br>");
}
*/

//Ahora todas las tablas del 1 al 10

for(j;j<=10;j++){
    document.write("<h2>" +  j + "</h2>");
    i=1;
    for(i;i<=10;i++){
        document.write(i + " x " + j + " = " + (i*j) + "<br>");
    }
            
}