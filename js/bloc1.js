//Bloc 1
let bloc1Parent = document.getElementById("bloc1");

let blocEnfant = document.createElement("div");

blocEnfant.innerHTML = `
    <img src="img/avataaars.svg" alt="logo" title="logo" width="15%" />
    <h2 class="titre-h2">JAVASCRIPT GENERATOR</h2>
    <div class="line-star-parent">
        <div class="line-white"></div>
        <div class="star">
               <i class="fa-solid fa-star fa-3x"></i>
        </div>
        <div class="line-white"></div>
    </div>
    <h3 class="titre-h3">Artiste Graphique - Web Designer - Illustrateur</h3>
`

bloc1Parent.appendChild(blocEnfant)