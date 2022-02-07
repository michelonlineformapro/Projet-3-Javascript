//block 2

let block2Parent = document.getElementById("bloc2");

let block2Enfant = document.createElement("div");

block2Enfant.innerHTML =
    `
    <h1 class="titre-h1">PORTEFOLIO</h1>
     <div class="line-star-parent">
        <div class="line-white"></div>
        <div class="star">
               <i class="fa-solid fa-star fa-3x"></i>
        </div>
        <div class="line-white"></div>
    </div>
    
    <div class="card-parent">
        <div class="card-enfant">
            <div class="card">
                <img src="img/cake.png" alt="cake" title="cake"/>
            </div>
            
            <div class="card">
                <img src="img/cabin.png" alt="cake" title="cake"/>
            </div>
            
            <div class="card">
                <img src="img/circus.png" alt="cake" title="cake"/>
            </div>
                    
          
            <div class="card">
                <img src="img/game.png" alt="cake" title="cake"/>
            </div>
            
            <div class="card">
                <img src="img/safe.png" alt="cake" title="cake"/>
            </div>
            
            <div class="card">
                <img src="img/submarine.png" alt="cake" title="cake"/>
            </div>
        </div>
        
    </div>
    `

block2Parent.appendChild(block2Enfant)
