//try catch evite le blocage s'un script
let divParent = document.getElementById("error");
let a = {};
/*

//Ici le code est bloqué
a.testMethode();
//ceci ne s'affiche pas
console.log("salut DWDM");
*/
//la solution = capture d'erreur
    try {
        a.testMethode();
    }catch (error) {
        console.log("ya une erreur :" + error.name)
        console.log("voici le message : " + error.message)
        console.log("+ precis" + error.stack)
    }finally {
        //il fait le console.log
        console.log("salut DWDM");
    }

    //Creer ses propres debug
let testUnitaire = function(nombre) {
    if(nombre > 5){
        //throw + insatnce de la classe erreur
        throw new Error("Le nombre ne peut pas etre supérieur a 5")
    }
    return nombre * 2
}
//Bloquant
//testUnitaire(10);


    //Prototype d'un objet = touver la classe parente
    let b = 1;
    let nom = "mic"
    let float = 0.253;
    let tableau = ["dklz", 12, 15.25, true];
    let objet = {
        id:1,
        nom: "test"
    }
console.log(Object.getPrototypeOf(b))
console.log(Object.getPrototypeOf(nom))
console.log(Object.getPrototypeOf(float))
console.log(Object.getPrototypeOf(tableau))
console.log(Object.getPrototypeOf(objet))

function maFonction() {
    console.log("ok")
}
console.log(maFonction)

//une fonction c quoi ?
function AutreFonction(nom){
        this.__proto__ = AutreFonction.prototype
        this.nom = nom
        return this
}

AutreFonction("bob")







