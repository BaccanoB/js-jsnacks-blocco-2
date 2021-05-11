// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function newArray (array,a,b){
    var arrayNuovo = [];
    for (var i = 0; i<array.length; i++){
       if(i > a && i < b){
            arrayNuovo.push(array[i])
       }
    }
    return arrayNuovo;
}

var arrayNumeri = [1,"ciao",3,4,5,6];

var nuovoArray = newArray(arrayNumeri,0,5);
console.log(nuovoArray);