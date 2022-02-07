const leftAside = document.getElementById("leftAside");

leftAside.innerHTML =
    `
    <a href="#" class="fermer" onclick="fermerAside()">&times;</a>
    <a class="lienGauche active" href="./taches.html">LISTE DES TACHES</a>
    <a class="lienGauche" href="./briques.html">CASSE BRIQUES</a>
    <a class="lienGauche" href="./recettes.html">RECETTES</a>
    <a class="lienGauche" href="./ajax.html">AJAX</a>
     <a class="lienGauche" href="./produits.html">PRODUITS</a>
    `

function fermerAside(){
    document.getElementById("leftAside").style.width = "0";
}