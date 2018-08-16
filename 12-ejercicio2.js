'use strict'

/*
Pedir recurrentemente una serie de números hasta que meta el usuario un número negativo. 
Entonces devolver la suma y la media.
*/ 

var numero = 0; 
var total=0;
var i = 0;
do {
    
        numero = parseInt(prompt("Número: "));
        if(numero>0) {
            total = total + numero;
            i++;
        }
        
}while(numero>0);

//Resultado final
console.log("La suma es " + total + " y la media es " + total/(i));
