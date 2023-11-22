//  Excercice 7
//On créé une interface de communication avec le terminal de l'utilisateur
const readline = require('readline').createInterface({   
    input: process.stdin,   
    output: process.stdout,});


let valeur;



readline.question("donne moi un nombre ", saisie1 =>{
    valeur=saisie1;
    
        valeur= Number(valeur);
        
        if( valeur>0){             
        console.log("Ce nombre est positif ! ");
        }
        else if( valeur<0) { 
            console.log("Ce nombre est négatif !");
        }
        else{
            console.log("Ce nombre est nul !");
        }
        readline.close();
        
    });