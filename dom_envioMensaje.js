'use strict'

//document.getElementById('boton').onclick=()=>alert("hola");
    //Cuando haga click, mostraré lo que haya en las cajas.
    
    document.getElementById('boton').onclick=function(){
        var mensaje = "Vas a enviar el siguiente mensaje: \n " +

                        document.getElementById('consulta').value 
                        + "\n \n y tus datos son: \n " +
                        document.getElementById('nombre').value 
                        + " " + 
                        document.getElementById('apellido').value 
                        + " " + 
                        document.getElementById('email').value ;
               
        alert(mensaje);

        document.write("<hr><h2>Tu mensaje se ha enviado correctamente. En breve contactaremos contigo<h2>");
            
    
    
    };


