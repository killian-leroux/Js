//Exercice 1 TP 2
//On créé une interface de communication avec le terminal de l'utilisateur
const readline = require('readline').createInterface({   
    input: process.stdin,   
    output: process.stdout,});


let nombre1;
let nombre2;
let nombre3;

//On définit une question à poser à l'utilisateur...
 readline.question("donne moi un nombre ", saisie1 =>{
        nombre1=saisie1;
        readline.question("redonne moi un nombre ", saisie2 =>{
            nombre2=saisie2;
            readline.question("ENCORE un nombre ", saisie3 =>{
                nombre3=saisie3;
                    //On transforme la réponse de l'utilisateur en nombre...
                    nombre1= Number(nombre1);
                    nombre2= Number(nombre2);
                    nombre3= Number(nombre3);

            readline.close();
            // On utilise Math.max pour trouver le nombre le plus grand de la liste
            console.log("[",nombre1,",",nombre2,",",nombre3,",","] -->", Math.max(nombre1,nombre2,nombre3));

            });
        });
    });    