'use strict'

/*
Mostrar todos los números comprendidos entre dos introducidos por el usuario
*/ 

var n1 = parseInt(prompt("n1: "));
var n2 = parseInt(prompt("n2: "));


document.write("<h2>Entre " + n1 + " y " + n2 + " están los numeros: </h2>");
for(var i =n1;i<=n2;i++){
    
    document.write(i + "<br>");
};

