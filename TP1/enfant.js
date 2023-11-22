const readline = require('readline').createInterface({   
    input: process.stdin,   
    output: process.stdout,});


    let age ;

    readline.question("Age de votre enfant? ", ageEnfant =>{
        age=ageEnfant;
        readline.close();

        if(age>= 12){                         
            console.log("Votre enfant est un cadet");
        }
        //si age supérieur a 10 et inferieur a 12
        else if (age>=10 && age<12){        
            console.log("Votre enfant est un Minime");
        }
        // si age supérieur a 8 et inferieur a 10
        else if (age>=8 && age<10){        
            console.log("Votre enfant est un Pupille");
        }
        else{
            console.log("Votre enfant est un Poussin");
        }

    });

