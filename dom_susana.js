'use strict'
/**
 * Crear un elemento DIV por javascript
 * Modificar el elemento DIV en color, span y texto.
 * 
 */

 document.write("<div id='caja1'>Texto de la Caja</div>");

 var elemento = document.getElementById("caja1");

elemento.innerHTML="NUEVO TEXTO";

elemento.style.backgroundColor="red";

//elemento.style.display = "none";

//elemento.style.letterSpacing="10px";

elemento.style.padding = "15px";

 console.log(elemento);