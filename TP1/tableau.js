//Exercice 9


let somme=0;

function tableau(...nombres){
    for (let i = 0; i < nombres.length; i++) {
        somme=nombres[i]+somme;
    }
    console.log(somme);
}

tableau(1,1, 2, 3,660);