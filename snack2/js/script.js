// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var punti = 0;
var falliSubiti = 0;
var array = [];

var squadre = [
    {
        nome:"Roma",
    },
    {
        nome:"Borussia",
    },
    {
        nome:"Manchester",
    },
    {
        nome:"Fulham",
    }
]

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(var i = 0; i<squadre.length; i++){
    punti = randomNumber(1,10)
    falliSubiti = randomNumber(1,10)
    squadre[i]["punti"] = punti;
    squadre[i]["falli"] = falliSubiti;
}

for(var i = 0; i<squadre.length; i++){
    array.push(squadre[i].nome,squadre[i].falli)
}


console.log(squadre);

console.log(array);
