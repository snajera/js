'use strict'

/* Calculadora:
-Pide dos numeros por pantalla.
-Si metemos uno mal que siga pidiendo
-En el body, console y alert dar el resultado de suma, resta, multiplicar y dividir esas dos cifras.
*/

var n1 = parseInt(prompt("n1: "));
var n2 = parseInt(prompt("n2: "));

while(isNaN(n1)||isNaN(n2)){
    var n1 = parseInt(prompt("n1: "));
    var n2 = parseInt(prompt("n2: "));        
}

var suma = n1 + n2;
var multi = n1 * n2;
var resta = n1-n2;
var divide;

if(n2!=0){
    divide = n1 / n2;
} else {
    divide = "Infinito";
}

var resultado = "Suma: " + suma + " Resta: " + resta + " Multiplicacion: " + multi + " División: " + divide + "<br>";
var resultadoCMD = "Suma: " + suma + "\n" +
                   "Resta: " + resta + "\n"+ 
                   "Multiplicacion: " + multi + "\n"+
                   "División: " + divide + "\n";


//body
document.write(resultado);

//alert
alert(resultadoCMD);

//console
console.log(resultadoCMD);
