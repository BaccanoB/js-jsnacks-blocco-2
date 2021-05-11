// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var  biciclette = [
    {
        nome:"mountain bike",
        peso: 12
    },
    {
        nome:"bici da corsa",
        peso:10
    },
    {
        nome:"ciclocross",
        peso:13
    },
    {
        nome:"BMX",
        peso:20
    }
];

// Math.min(12,10,13,20);

var pesoMinore = [];

for(var i = 0; i<biciclette.length; i++){
   pesoMinore.push(biciclette[i].peso);
   pesoMinore.sort();
}

console.log(pesoMinore[0]);