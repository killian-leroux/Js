// Exercice 2 TP2
//On créé une interface de communication avec le terminal de l'utilisateur
const readline = require('readline').createInterface({   
    input: process.stdin,   
    output: process.stdout,});


let note;


readline.question("Donne moi la note de l'eleve ", saisie1 =>{
    note=saisie1;
    
        note= Number(note);
        
        if(note>0 && note<=4){
            console.log("tu as eu ",note," C'est catastrophique, il faut tout revoire ");
        }
        else if (note>5 && note<=10) {
            console.log("tu as eu ",note," c'est insuffisant");
        }
        else if (note>11 && note<=14) {
            console.log("tu as eu ",note," Tu peux mieux faire");
        }
        else if (note>15 && note<=17) {
            console.log("tu as eu ",note," c'est bien");
        }
        else if (note>18 && note<=20) {
            console.log("tu as eu ",note," c'est excellent, bon travail !");
        }
        else {
            console.log("Cette note n'existe pas ! :)");
        }
        readline.close();
    });