/*
let para = document.querySelector("p");

para.style.color = "red";

let paras = document.querySelectorAll(".test");

paras.forEach(function (alias){
    alias.style.color = "purple"
});

 */
let tableau = ["dzd", 12, 1.5, true]

let tableauProduits = [
    {
        id:1,
        nomProduit: "velo",
        prixProduit: 125.25,
        disponible: true,
        categorie: "loisir"
    },
    {
        id:2,
        nomProduit: "chaise",
        prixProduit: 1225.25,
        disponible: false,
        categorie: "meuble"
    },
    {
        id:5,
        nomProduit: "Pc Hp Pavillon",
        prixProduit: 15.25,
        disponible: false,
        categorie: "informatique"
    },
    {
        id:3,
        nomProduit: "table",
        prixProduit: 1225.25,
        disponible: false,
        categorie: "meuble"
    },
    {
        id:4,
        nomProduit: "Apple Mac",
        prixProduit: 1225.25,
        disponible: false,
        categorie: "informatique"
    },
    {
        id:5,
        nomProduit: "voyage baléares",
        prixProduit: 22125.25,
        disponible: true,
        categorie: "loisir"
    },
];

//Variable Globle
let resultatParent = document.getElementById("resultats");

function afficherProduits(){
    //Recup de tous les <input type="checkbox">
    let checkbox = document.querySelectorAll("input[type='checkbox']");

    for(box of checkbox){
        console.log(box.value)
        //Etat des check (coché ou decoché) = true ou false
        box.addEventListener('change', function (event){

        })
        box.onchange = function (event){
            //Recup de la valeur de <input id="loisir" type="checkbox" value="loisir" />
            let checkBoxValue = event.target.value
            //Recup de l'etat (coché ou non coché) = true ou false
            let isChecked = event.target.checked

            //Test si la case est coché c coché ou non
            if(isChecked){
                //console.log("ok c coché")
                //Si la case cochée et possède la value = loisir
                //<input id="loisir" type="checkbox" value="loisir" />
                if(checkBoxValue === "loisir"){
                    //Debug
                    console.log("c coché")
                    //Acceder au tableau et emmetre condition
                    tableauProduits.forEach(function (produit){
                        //Si un objet du tableau possède la clé categorier + la valeur loisir
                        if(`${produit.categorie}` === "loisir"){
                            //On creer un paragraphe
                            let enfantResultat = document.createElement("p");
                            //On ajoute un id dynmaique
                            enfantResultat.id = `produit-${produit.id}`;
                            //On affiche le nom et le prix du produit
                            enfantResultat.innerHTML =
                                `
                                <p>NOM DU PRODUIT : ${produit.nomProduit}</p>
                                <p>PRIX DU PRODUIT : ${produit.prixProduit}</p>
                                `
                            //On ajoute au parent <div id="resultats">
                            resultatParent.appendChild(enfantResultat);
                        }
                    })

                }else{
                    //Sinon on creer des paragraphe vide pour eviter les données dupliquées
                    tableauProduits.forEach(function (produit){
                        if(`${produit.categorie}` === "loisir"){
                            let enfantResultat = document.createElement("p");
                            enfantResultat.id = `produit-${produit.id}`;
                            enfantResultat.innerHTML = ""
                            resultatParent.appendChild(enfantResultat);
                        }
                    })
                }
            }else{
                //SI LA CASE value loisir EST DECOCHÉE
                //on recup tous les paragraphes vides ou remplis dans la condition précédente
                //avec la methode querySelectorAll()
                let p = document.querySelectorAll("p");
                //On boucle sur le tableau de paragraphe
                for (paragraphe of p){
                    //On cache les paragraphe
                    paragraphe.style.display = "none";
                }
            }
        }
    }
}

afficherProduits();
