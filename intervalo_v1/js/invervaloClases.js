'use strict'
//Clases sobre Intervalos

class Intervalo {
	
	constructor(cierreA=0,extremoA=0,extremoB=0, cierreB=0) {

		this.extremoA = extremoA;
		this.cierreA = cierreA;
		this.extremoB = extremoB;
		this.cierreB = cierreB;
	}
	
	get longitud(){
		
		return this.extremoB - this.extremoA;
	}
	
	get valor(){
		let aux_cierreA = '(';
		let aux_cierreB = ')';
			
		if(this.cierreA == 1) aux_cierreA = '[';
		if(this.cierreB == 1) aux_cierreB = ']';
		
			
		return aux_cierreA + this.extremoA + ',' + this.extremoB + aux_cierreB;
		
	}
	
	static 	metodoEstatico(){
		//Metodo solo accesible por la clase, ej. Math.loquesea
		return 'Método accesible solo desde la propia clase';
	}

	nadaEspecial() {
		alert('metodo nadaEspecial funcionando!....');
	}
		
	union(intervalo) {
		//función para sumar intervalos (union)
		
		   
		if (this.extremoA < intervalo.extremoA && intervalo.extremoA < intervalo.extremoB && intervalo.extremoB < this.extremoB ) { //a<c<d<b --> ((a,b))
			return 'A ' + this.valor;
		   //intervalo.extremoA < this.extremoA < this.extremoB < intervalo.extremoB
		} else if (intervalo.extremoA < this.extremoA && this.extremoA < this.extremoB && this.extremoB < intervalo.extremoB) { //c<a<b<d --> ((c,d))
			this.extremoA = intervalo.extremoA;
			this.extremoB = intervalo.extremoB;
			return 'B ' + this.valor;
			//this.extremoA < this.extremoB < intervalo.extremoA < intervalo.extremoB
		} else if (this.extremoA < this.extremoB && this.extremoB < intervalo.extremoA  && intervalo.extremoA < intervalo.extremoB ) {		// a<b<c<d or 
			return 'C ' + this.valor + ' U ' + intervalo.valor;
			//intervalo.extremoA<intervalo.extremoB <this.extremoA<this.extremoB
		} else if (intervalo.extremoA<intervalo.extremoB && intervalo.extremoB <this.extremoA && this.extremoA<this.extremoB ) { //c<d<a<b que no solapen nada
			return 'D ' + intervalo.valor + ' U ' + this.valor;
		} else if (intervalo.extremoA < this.extremoA) {//intercalados por la izquierda C-----a----D----b
			this.extremoA = intervalo.extremoA;
			return 'E ' + this.valor;
		} else if (this.extremoA < intervalo.extremoA) { //intercalados por la derecha. a-----C----b---D
			this.extremoB = intervalo.extremoB;
			return 'F ' + this.valor;
		}
		else {
			//quedan todavia casos que tener en cuenta, pero de momento nos vale.
			return 0;
		}
		
		
	}
}


class ListaIntervalos {
		
		constructor() {
			// se declara un array que contendrá los intervalos
			//var muestra='';
			this.lista=[];
		}
		
		add(intervalo) {
			this.lista.push(intervalo);
		}
		
		mostrar() {
			var resultado = '';
			for (let i=0;i<this.lista.length;i++){
				resultado +=' ' + this.lista[i];
			}
			
			return resultado;
			
			//return this.lista	; //OK	
		}
		
		contar() {
			return this.lista.length;
		}	

		borrar() {
			this.lista.pop();
		}
}

//Funcion que haga que dado un literal en forma de intervalo, construya el objeto intervalo.

function parseIntervalo(cadena){
	var cierreA = 0;
	var cierreB = 0;
	
	if (cadena.charAt(0) =='[') {
		cierreA = 1;
	} 
	
	if (cadena.charAt(cadena.length-1) ==']') {
		cierreB = 1;
	} 

	var res = cadena.split(",");

	
	var extremoA = res[0].slice(1,);
	//console.log('Extremo A: ' + extremoA);
		
	var extremoB = res[1].slice(0,(res[1].length-1));
	//console.log('Extremo B: ' + extremoB);
	
	var inter = new Intervalo(cierreA, extremoA, extremoB, cierreB);
	
	return inter;
	
}


/*
var int1 = new Intervalo(0,1,10,0);

var int2 = new Intervalo(0,2,9,0);

console.log(int1.union(int2));

var li = new ListaIntervalos();


li.add(int1.valor);
li.add(int2.valor);
li.add(int1.valor);
li.add(int2.valor);




console.log(li.mostrar());
console.log(li.contar());
li.borrar();
console.log(li.mostrar());
console.log(li.contar());
li.add(int1.union(int2));
console.log(li.mostrar());
console.log(li.contar());
*/


var x = parseIntervalo('(1,4)');

//console.log(x.longitud); --works fine!
//x.nadaEspecial(); --works fine!






