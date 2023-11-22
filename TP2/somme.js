// Exercice 2 TP2
//On créé une interface de communication avec le terminal de l'utilisateur
const readline = require('readline').createInterface({   
    input: process.stdin,   
    output: process.stdout,});


let chiffre;
let somme=0;
let liste=[];
//On définit une question à poser à l'utilisateur...
readline.question("Donne moi un nombre ", saisie1 =>{
        chiffre=saisie1;

        //On transforme la réponse de l'utilisateur en nombre..
        chiffre= Number(chiffre);
        for (let i=0; i<chiffre+1; i++){
            //On utilise la fonction push pour mettre chaque valeur de i dans le tableau
            liste.push(i);
            somme=i+somme; 
        }
        //On utilise le .join pour afficher ce que contient le tableau
        console.log(liste.join('+'),"= ",somme);
        
        readline.close();
});