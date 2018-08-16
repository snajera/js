'use strict'
/* Todos los números divisores de un número introducido por pantalla */

var n1 = parseInt(prompt("n1:"));
var i = n1;
while(i>=1) {

    if(n1%i==0){
        console.log(i);
    };
i--;
};