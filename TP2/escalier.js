// Exercice 4 TP2
//On créé une interface de communication avec le terminal de l'utilisateur
const readline = require('readline').createInterface({   
    input: process.stdin,   
    output: process.stdout,});


let nombre;
let liste=[];

//On définit une question à poser à l'utilisateur...
readline.question("Donne moi un nombre ", saisie1 =>{
        nombre=saisie1;

        //On transforme la réponse de l'utilisateur en nombre..
        nombre= Number(nombre);
        for (let i=0; i<nombre+1; i++){
            
            console.log("");
        }
});