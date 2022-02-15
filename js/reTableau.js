window.location = "../index.html"

//Tableau simple

//let tableau1 = ["mic", 15, 25.65, true];

//Recup de la liste ul avec l'attribut id="tableau"
//let listeUL = document.getElementById("tableau1");

/*
for(datas of tableau1){
    //Creer un noeud de type element dans le dom
    let listeItemLI = document.createElement("li");
    listeItemLI.className = "classeLI";
    listeItemLI.id = `id-${tableau1}`

    listeItemLI.innerHTML = datas

    listeUL.appendChild(listeItemLI)


}

 */

/*
let i;

for(i = 0; i < tableau1.length; i++){
    //Creer un noeud de type element dans le dom
    let listeItemLI = document.createElement("li");
    listeItemLI.className = "classeLI";

    listeItemLI.innerHTML = tableau1[i]
    console.log(tableau1[i])

    listeUL.appendChild(listeItemLI)
}

let chien = {
    id:1,
    nom:"polux",
    age:4,
    estVacciner: true
}

let listeItemLI = document.createElement("li");
listeItemLI.className = "classeLI";

listeItemLI.innerHTML = chien.nom


listeUL.appendChild(listeItemLI)
*/


let produits = [
    {
        id:1,
        nomProduit: "Chaise",
        image: "data:image/jpeg;base64,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",
        prixHT: 25.25,
        tva: 0.2,
        prixTTC:0
    },
    {
        id:2,
        nomProduit: "Table",
        image: "https://www.cocktail-scandinave.fr/Vbeta2018/wp-content/uploads/2018/02/RGATA180AL.jpg",
        prixHT: 2556.25,
        tva: 0.2,
        prixTTC:0
    },
    {
        id:3,
        nomProduit: "Enceintes KrK",
        image: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/bdb/322608/14633221_800.jpg",
        prixHT: 125.25,
        tva: 0.2,
        prixTTC:0
    },
    {
        id:4,
        nomProduit: "Iphone Apple",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000",
        prixHT: 789.25,
        tva: 0.2,
        prixTTC:0

    },
    {
        id:5,
        nomProduit: "SNES MINI",
        image: "data:image/jpeg;base64,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",
        prixHT: 325.25,
        tva: 0.2,
        prixTTC:0
    },
    {
        id:6,
        nomProduit: "Chaise Bois",
        image: "https://cdn.connox.fr/m/100030/140048/media/stoelcker/Frankfurter-Kuechenstuhl/Frankfurter-Kuechenstuhl-Buche-frei-1200x1200.jpg",
        prixHT: 205.50,
        tva: 0.2,
        prixTTC:0
    },
    {
        id:7,
        nomProduit: "Mac Apple",
        image: "https://cdn.pocket-lint.com/r/s/1200x/assets/images/152659-laptops-feature-apple-silicon-what-does-it-mean-for-your-existing-mac-and-your-next-one-image3-ompkj48tmh.jpg",
        prixHT: 45.25,
        tva: 0.2,
        prixTTC:0
    },
    {
        id:8,
        nomProduit: "Korg Minilogue",
        image: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/bdb/457066/14351333_800.jpg",
        prixHT: 1789.25,
        tva: 0.2,
        prixTTC:0
    },

]

//Tableau vide
let panier = [];

function afficherProduit(){
    let listeUL = document.getElementById("tableau1")

    produits.forEach((donnee) => {
        console.log(donnee)
        let listeItemLI = document.createElement("li");
        listeItemLI.className = "classeLI";
        listeItemLI.id = `monIdUnique-${donnee.id}`



        listeItemLI.innerHTML =
            `
        <p>${donnee.nomProduit}</p>
        <img src="${donnee.image}" alt="${donnee.nomProduit}" title="${donnee.nomProduit}">
      
     
        <p>RRIX HT : ${donnee.prixHT} €</p>
        <p>TAUX DE TVA : 20%</p>
        
        `

        //Ajouter les <li> au parent <ul>
        listeUL.appendChild(listeItemLI);

        //Click sur chaque <li>
        listeItemLI.addEventListener("click", () => {
            //Au clic on ajoute l'objet concerné aau tableau apnier
            panier.push(donnee)
            //On cache le produit du tableau produit avec du css
            listeItemLI.style.display = "none"

            console.log("Le tableau panier sous forme d'onjet " + panier);
            //On appel la fonction affciherPanier qui boucle sur le tableau panier
            afficherPanier();
        });
    });
}

/*
function getTVA(prixHT, tauxTVA){
    console.log(prixHT * tauxTVA)
}

getTVA(200, 1.2)
*/
function afficherPanier(){
    //Recup le <ul> html

    let produitPanier = "";

    panier.forEach(produit => {
        let prixTTC = `${produit.prixHT} * ${produit.tva}`

        produitPanier +=
            `
            <li class="classeLI" id="panier-produit-${produit.id}">
                <p style="color: red">Nom du produit ${produit.nomProduit}</p>
                <img src="${produit.image}" alt="${produit.nomProduit}" title="${produit.nomProduit}" width="15%">
                  <select id="selectQuantites-${produit.id}">
                    <option selected>Choisir les quantitées</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>+ 10</option>
                </select>
                <p>Prix Hors Taxe: ${produit.prixHT} €</p>
                <p id="total-${produit.id}">TOTAL</p>
                <p id="tva-${produit.id}">Montant de tva : </p>
                <p id="ttc-${produit.id}">Montant TTC : </p>
            </li>
            `
    });
    //Recupd de <ul id="panier" et ajour du li + HTML
    document.getElementById("panier").innerHTML = produitPanier

    //Supprimer un produit du tableau panier
    panier.forEach(supprimer => {
        //Recup des produits caché (display none) du teableru de produit
        let produitTableau1 = document.getElementById(`monIdUnique-${supprimer.id}`)
        let produitsSupprimer = document.getElementById(`panier-produit-${supprimer.id}`);

        //On creer un bouton pour les produits ajouter au panier panier
        let btnSupprimer = document.createElement("button");
        //Ajout d'un id unique a chaque bouton
        btnSupprimer.id = `btn-supprimer${supprimer.id}`;
        //Ajout d'une classe au bouton supprimer
        btnSupprimer.className = "btn-download";

        //Ajout de texte au bouton
        btnSupprimer.innerHTML = " X ";
        //On ajoute le bouton a chaque <li> des produits dans le tableau panier
        produitsSupprimer.appendChild(btnSupprimer);

        //Au clic sur le btouton supprimer
        btnSupprimer.addEventListener("click", function (){
            //alert("test de clic")
            //On fait reapparaitre le produits dans le tableau de produit avec css
            produitTableau1.style.display = "block";
            //On recupère l'index du produit dans le tableau panier
            let panierIndex = panier.indexOf(supprimer);
            console.log("Index du tableau panier " + panierIndex);
            //recup de l'index du tableau pannier et suppression d'un element
            /*La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux
             éléments à même le tableau.On peut ainsi vider ou remplacer une partie d'un tableau.*/
            panier.splice(panierIndex, 1);
            console.log(panier);
            //On supprimer le noeud de type element <li> du DOM
            produitsSupprimer.remove()

        });
        //Recupération de id de chaque select quantité de chaque produit
        let selectQuantitees = document.getElementById(`selectQuantites-${supprimer.id}`);
        //Quand l'utilisateur modifie la quantité => on appel une fonction anonyme (callBack)
        selectQuantitees.addEventListener("change", () => {
            //Récupération de l'index de chaque <select><option>
            let indexQuantite = selectQuantitees.selectedIndex;
            //Debug
            console.log("INDEX DE LA FENETRE DEROULANTE " + indexQuantite);
            //On multiplie le prix HT par la quantité
            let prixMutiplierQuantite = indexQuantite * `${supprimer.prixHT}`;
            //Debug
            console.log(prixMutiplierQuantite );
            document.getElementById(`total-${supprimer.id}`).innerHTML = "Prix HT X Quantitées = " + prixMutiplierQuantite  + "€";

            //Calcul du montant de TVA
            let montantTVA = prixMutiplierQuantite * .2
            console.log("Montant de tva = " + montantTVA + " euros")

            let prixTTC = prixMutiplierQuantite + Math.floor(montantTVA);

            console.log("Prix TTC = " + prixTTC + " euros")
            //Calcul du montant TTC
            document.getElementById(`tva-${supprimer.id}`).innerHTML = "Montant de TVA a 20% : "  + montantTVA + " €";
            document.getElementById(`ttc-${supprimer.id}`).innerHTML = "Montant TTC : " + prixTTC + " €";

            //Affichage du montant TTC
        });
    });

    //Afficher les quantité de chaque produits



}



afficherProduit();




