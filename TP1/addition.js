const readline = require('readline').createInterface({   
    input: process.stdin,   
    output: process.stdout,});


let nombre1;
let nombre2;
let somme;

 readline.question("donne moi un nombre ", saisie1 =>{
        nombre1=saisie1;
        readline.question("redonne moi un nombre ", saisie2 =>{
            nombre2=saisie2;
            nombre2= Number(nombre2);
            nombre1= Number(nombre1);
            somme=nombre1+nombre2;

            readline.close();
            console.log("l'addition des deux nombres est de ",somme);
        });
        
});
 
 




