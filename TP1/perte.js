//Exercice 5
//On créé une interface de communication avec le terminal de l'utilisateur
const readline = require('readline').createInterface({   
    input: process.stdin,   
    output: process.stdout,});


let prix1;
let prix2;

//On définit une question à poser à l'utilisateur...
 readline.question("Quel est le prix de fabrication? ", fabrication =>{
        prix1=fabrication;
        readline.question("Quel est le prix de vente? ", vente =>{
            prix2=vente;
            //On transforme la réponse de l'utilisateur en nombre...
            prix1= Number(prix1);
            prix2= Number(prix2);
            
            // On compare le cout de fabrication et le prix de vente pour savoir si on est en perte ou en profit
            if(prix1>prix2){
                console.log("Vous etes en perte ",);
            }
            else {
                console.log("Vous etes en profit ",);
            }
            readline.close();
            
        });
        
});
 
 