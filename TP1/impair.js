//Exercice 6
const readline = require('readline').createInterface({   
    input: process.stdin,   
    output: process.stdout,});


let valeur;


readline.question("donne moi un nombre ", saisie1 =>{
    valeur=saisie1;
    
        valeur= Number(valeur);
        // modulo 2 de la valeur pour avoir le reste
        if( valeur %2 ==0){             
        console.log("Ce nombre est pair ! ");
        }
        else { 
            console.log("Ce nombre est impair !");
        }
        readline.close();
        
    });


