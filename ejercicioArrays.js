'use strict'

/**
 * 1) Introducir una serie de elementos de un array. Salimos con -1
 * 2) Mostrar la función por Body o por Consola
 * 3) Mostrar número total de elementos
 * 4) Formatear: orden o inverso
 * 5) Búsqueda del término que el usuario introduzca por teclado.
 * 
 */


var listaPacientes = new Array();
var getDato="";

function entradaDatos() {
//Entrar datos del array por consola. Salimos con -1
    do{
        getDato = prompt("Introduce elemento: ");
        listaPacientes.push(getDato);

    }while(getDato!=-1);
    listaPacientes.pop();
}

function formateoLista(lista, tipo=false){
    if(tipo=="ordena") {
        lista = lista.sort();
    } else if (tipo=="invierte"){
        lista = lista.reverse();
    } 
    //return lista;
}

function muestraLista(lista, body=true, consola=true, total=true){
    //Por defecto lo saca por Body, por consola y además con los nº de elementos.

    if(body) {
        document.write("<uo>");
        for(let i in lista){
            document.write("<li>" + lista[i] + "</li>" );
        }
        document.write("</uo>");
    }

    if(consola){
        for(let i in lista){
            console.log(lista[i]);
        }
        
    }

    if (total) {
        console.log("Nº de elementos: " + lista.length);
        document.write("<h3> Nº de elementos: " + lista.length + "<h3>");
    }

}

function buscaElemento(lista){
    var busca = prompt("Introduce el elemento que quieres encontrar: ");
    var encuentra = lista.find(elemento => elemento == busca );

    if (encuentra == null) {
        console.log("No Existe ese elemento en la lista");
    } else {
        console.log("El elemento es: " + encuentra);
    }
    
}

//Ejecuto las funciones
entradaDatos();
//muestraLista(listaPacientes, true,false);
formateoLista(listaPacientes, "invierte");
muestraLista(listaPacientes);
buscaElemento(listaPacientes);