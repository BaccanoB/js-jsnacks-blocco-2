// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function newArray (array,a,b){
    var arrayNuovo = [];
    for (var i = 0; i<array.length; i++){
       if(array[i]>a){
            arrayNuovo.push(array[i])
       }else if (array[i]<b){
            arrayNuovo.push(array[i])
       }

    }
    return arrayNuovo;
}

var arrayNumeri = [1,2,3,4,5,6];

var nuovoArray = newArray(arrayNumeri,1,4);
console.log(nuovoArray);