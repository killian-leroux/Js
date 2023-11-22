const readline = require('readline').createInterface({   
    input: process.stdin,   
    output: process.stdout,});


let valeur;
let nombre;
let resultat;

readline.question("donne moi un nombre ", saisie1 =>{
    valeur=saisie1;
    
        valeur= Number(valeur);
        
        for (let i = 1; i < 11; i++) {
            nombre=nombre+1;
            resultat= valeur*i;
            console.log(valeur,"x",nombre,"=",resultat);
        }
        readline.close();
    });