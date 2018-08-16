'use strict'

//metemos todo en el onload de la ventana
window.addEventListener('load', function() {
    console.log('Cargados todos los elementos');
    var titulo = document.querySelector('#titulo');

        function cambiaTamanio() {
            if(titulo.style.fontSize=='50px') {
                titulo.style.fontSize='10px';
                titulo.style.backgroundColor='red';
            } else {
                titulo.style.fontSize='50px';
                titulo.style.backgroundColor='green';
            }
        }
        
        var boton = document.querySelector('#btnCambiar');
        boton.addEventListener('click', ()=>cambiaTamanio());
        
        var timer=''; //la delcarlo global para poder pasarla entre funciones
        
        //Timer
        function parpadeo(){
            timer = setInterval(()=>cambiaTamanio(),1000);
            return timer
        }
        
        var start = document.querySelector('#btnStart');
        start.addEventListener('click', ()=>parpadeo());
        
        function parar(){
            clearInterval(timer); //le paso la variable global que contiene a la función setInterval
            titulo.style.backgroundColor='white';
        }
        
        
        var stop = document.querySelector('#btnStop');
        stop.addEventListener('click', ()=>parar());

})



        