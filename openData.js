'use strict'


function reqListener (){
    console.log(this.responseText);
    console.log('----');

}

var request = new XMLHttpRequest();
request.addEventListener("load",reqListener);

request.onload = function() {

    
    var data = JSON.parse(this.response);
    var data2 = data['@graph'];
    
    var lista = document.querySelector('#listaParking');

    var texto="";
    var para="";
    var salto="";
    var items = document.createElement("ul");
    lista.appendChild(items);
    var i = 0;

    
    for(i = 0; i<data2.length;i++) {
        //console.log(data2[2].address.locality);
        
        para = document.createElement("li");
        texto = document.createTextNode(data2[i].title + '\n' + data2[i].organization['organization-desc']);
        salto = document.createElement("br");
        para.appendChild(texto);
        items.appendChild(para);
        items.appendChild(salto);
        
        
    }
    var cargando = document.querySelector('#cargando');
    cargando.style.display='none';
    
    
    var paraFinal = document.createElement("p");
    texto = document.createTextNode('El número de aparcamientos es de ' + i);
    paraFinal.appendChild(texto);
    lista.appendChild(paraFinal);
    

    //console.log(data['@graph'][7].title); //bien!!! Ya me sale :)
}


request.open("GET",'https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json');
request.send();
