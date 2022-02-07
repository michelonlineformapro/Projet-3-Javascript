const bloc4 = document.getElementById("bloc4");

let bloc4Enfant = document.createElement("div");

bloc4Enfant.innerHTML = `
    <div class="bloc4-enfant">
    <h2 class="titre-h2">CONTACT</h2>
     <div class="line-star-parent">
        <div class="line-white"></div>
        <div class="star">
               <i class="fa-solid fa-star fa-3x"></i>
        </div>
        <div class="line-white"></div>
    </div>
    
    <div class="input">
        <label for="name">Nom</label>
        <input class="inputForm" type="text" id="name">
    </div>
    
    <div class="input">
        <label for="email">Email</label>
        <input class="inputForm"  type="email" id="email">
    </div>
    
    <div class="input">
        <label for="number">Numero telephone</label>
        <input class="inputForm"  type="number" id="number">
    </div>
    
    <div class="input">
        <label for="message">Nom</label>
        <textarea class="inputForm"  id="message" rows="5"></textarea>
    </div>
    
    <button id="btn-form" class="btn-valider">Envoyer</button>
    
    
    </div>
`

bloc4.appendChild(bloc4Enfant)