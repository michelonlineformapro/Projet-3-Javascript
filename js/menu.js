const menu = document.getElementById("menu");

menu.innerHTML =
    `
     <a class="asideBtn" href="#" onclick="ouvrirAside()">
        <i class="fa fa-home fa-1x"></i>
    </a>
    <a class="btn-toggle" onclick="darkLightMode()">
        <i id="toggleIcon" class="fa-solid fa-toggle-off"></i>
    </a>
    <a class="lien active" href="./accueil.html">ACCUEIL</a>
    <a class="lien" href="./taches.html">LISTE DES TACHES</a>
    <a class="lien" href="./briques.html">CASSE BRIQUES</a>
    <a class="lien" href="./produits.html">PRODUITS</a>
    <a class="menuBtn" href="#" onclick="showHideMenu()">
        <i class="fa fa-bars fa-1x"
    </a>
  
    `

function showHideMenu(){
    let menuParent = document.getElementById("menu");
    if(menuParent.className === "menuClasse"){
        menuParent.className += " responsive";
    }else{
        menuParent.className = "menuClasse"
    }
}

function ouvrirAside(){
    document.getElementById("leftAside").style.width = "100%";
}

function darkLightMode(){
    let element = document.body;
    element.classList.toggle("dark-mode")
    const toggleIcon = document.getElementById("toggleIcon");
    if(toggleIcon.className === "fa-solid fa-toggle-off"){
        toggleIcon.className = "fa-solid"
        toggleIcon.classList.toggle("fa-toggle-on")
    }else{
        toggleIcon.className = "fa-solid fa-toggle-off"
    }
}




