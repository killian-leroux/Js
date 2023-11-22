
const readline = require('readline').createInterface({   
input: process.stdin,   
output: process.stdout,});


let nomDonne

 readline.question("Quel est votre nom? ", nom =>{
        nomDonne=nom;
        readline.close();
        console.log("Bienvenue ", nomDonne);
});


