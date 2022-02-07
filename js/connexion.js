//Creation des infos de connexion

const email = "mic@gmail.com";
const password = "test";



let estConnecter = false;

const codeRandom = document.getElementById("codeRandom");
let randomCode = Math.round(Math.random() * 1000)
codeRandom.innerHTML = randomCode


//Recup des valeur des inputs
function connexion(){

    //Recuperer les valeurs des input utilisateur
    let emailInput = document.getElementById("email").value;
    console.log("Email entrer " + emailInput);
    let passwordInput = document.getElementById("password").value;
    console.log("Mot de passe enter " + passwordInput);

    const codeInput = document.getElementById("code").value
    console.log(codeInput)
    console.log(randomCode)

    //Si les champs sont vide
    if(emailInput === "" || passwordInput === "" || codeInput === ""){
        estConnecter = false;
        const erreur = document.getElementById("erreur");
        erreur.innerHTML = "Merci de remplir tous les champs";
        erreur.style.color = "wheat"
        console.log("erreur de connexion" + estConnecter);
        resetForm();
    }else{
        //Les condition de connexion
        if(emailInput === email && passwordInput === password && codeInput == randomCode){
            estConnecter = true;
            console.log("vous etes connecter" + estConnecter);
            //Condition de connexion
            if(estConnecter){

                document.getElementById("form").style.display = "none";
                let loader = document.getElementById("loader");
                loader.className = "loader";
                setTimeout(redirect, 2000)
                function redirect(){
                    window.location = "accueil.html";
                    console.log("c bon")
                }
            }
            return false
        }else{
            estConnecter = false;
            const erreur = document.getElementById("erreur");
            erreur.innerHTML = "Erreur de connexion, merci de verifier votre email et mot de passe";
            erreur.style.color = "wheat"
            console.log("erreur de connexion" + estConnecter);

        }
    }

}

function resetForm() {
    let emailInput = document.getElementById("email").value = "";
    let passwordInput = document.getElementById("password").value = "";
}


