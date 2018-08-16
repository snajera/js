'use strict'

/* Imprimir todos los impares entre dos números introducidos por teclado*/

var n1 = parseInt(prompt("n1: "));
var n2 = parseInt(prompt("n2: "));


document.write("<h2>Los impares son los siguientes:</h2>");

for(var i = n1; i<=n2;i++){
//si es impar, lo muestro
    if((i%2)!=0){
        document.write(i+"<br>");
    ;}

};