// L'endroit où placer le code du front-end.

// Fonction pour valider le nom de l'animal:

function validerNomAnimal() {
    var nomAnimal = document.getElementById("nom-animal").value;
    var nomAnimalErreur = document.getElementById("nom-animal-erreur");

    if (nomAnimal.length < 3) {
        nomAnimalErreur.innerHTML = "Le nom de l'animal doit contenir au moins 3 caractères.";
        return false;
    } 
    else if (nomAnimal.length > 20) {
        nomAnimalErreur.innerHTML = "Le nom de l'animal ne peut pas contenir plus de 20 caractères.";
        return false;
    }
    else if (nomAnimal === "") {
        nomAnimalErreur.innerHTML = "Le nom de l'animal ne peut pas être vide.";
        return false;
    }
    else if (nomAnimal.includes(",")) {
        nomAnimalErreur.innerHTML = "Le nom de l'animal ne peut pas contenir de virgule.";
        return false;
    }
    else {
        nomAnimalErreur.innerHTML = "";
        return true;
    }
}

// Fonction pour valider l'âge de l'animal:

function validerAgeAnimal() {
    var ageAnimal = document.getElementById("age-animal").value;
    var ageAnimalErreur = document.getElementById("age-animal-erreur");

    if (ageAnimal < 0) {
        ageAnimalErreur.innerHTML = "L'âge de l'animal ne peut pas être négatif.";
        return false;
    }
    else if (ageAnimal > 30) {
        ageAnimalErreur.innerHTML = "L'âge de l'animal ne peut pas être supérieur à 30 ans.";
        return false;
    }
    else if (ageAnimal === "") {
        ageAnimalErreur.innerHTML = "L'âge de l'animal ne peut pas être vide.";
        return false;
    }
    else {
        ageAnimalErreur.innerHTML = "";
        return true;
    }
}

// fonction pour valider la race
function validerRace(){
    var raceAnimal = document.getElementById("raceanimal").value;
    var msgErreurRace = document.getElementById("erreur-race");

    if(raceAnimal === ""){
        msgErreurRace.innerHTML = "Le champ de la race ne peut pas etre vide";
        return false;
    }else if (raceAnimal.includes(",")){
        msgErreurRace.innerHTML = "Le champ de la race ne doit pas contenir une virgule.";
        return false;
    } else {
        msgErreurRace.innerHTML = "";
        return true;
    }
}
   
//fonction pour valider l'espece
function validerEspece(){
        var especeAnimal = document.getElementById("especeanimal").value ;
        var msgErreurespece = document.getElementById("erreur-espece");

        if(especeAnimal === ""){
            msgErreurespece.innerHTML = " Veuillez remplir le champ de l'espece de l'animal";
            return false;
        } else if (especeAnimal.includes(",")){
            msgErreurespece.innerHTML = "L'espece ne doit pas contenir une virgule";
            return false;
        } else {
            msgErreurespece.innerHTML =  "";
            return true;
        }
}

//fonction pour valider la description de l'animal


function validerDescription(){
    var description = document.getElementById("descriptionanimal").value;
    var msgErrDescription = document.getElementById("erreur-description");

    if( description === ""){
        msgErrDescription.innerHTML = " Veuillez entrer une description de l'animal";
    } else if (description.includes(",")){
        msgErrDescription.innerHTML = "La description de l'animal ne doit pas contenir une virgule";
    } else {
        msgErrDescription.innerHTML = "";
    }
}

// fonction pour valider le courriel
function validerCourriel(){
    var courriel = document.getElementById("courrielproprietaire").value;
    var msgErreurCourriel = document.getElementById("erreur-courriel");
    const email = new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$') ;

    if (courriel === ""){
        msgErreurCourriel.innerHTML = "";
        return false;
    } else if (!(courriel.test(email))){
            msgErreurCourriel.innerHTML = "Le courriel ne respecte pas le format valide: example@gmail.com ";
            return false;
    } else if (courriel.includes(",")){
        msgErreurCourriel.innerHTML = "Le champ ne doit pas contenir une virgule"
        return false;
    } else {
        msgErreurCourriel.innerHTML = "";
        return true;
    }
}

//fonction pour valider l'adresse
function validerAdresse(){
    var adresse = document.getElementById("adresse-recuperation").value;
    var msgErrAdresse = document.getElementById("erreur-adresse");

    if(adresse === ""){
        msgErrAdresse.innerHTML="Veuillez ecrire l'adresse de recuperation";
        return false;
    } else if(adresse.includes(",")){
        msgErrAdresse.innerHTML="L'adresse ne doit pas contenir une virgule";
        return false;
    } else {
        msgErrAdresse.innerHTML = "";
        return true;
    }
}

// fonction pour valider la ville
function validerVille(){

    var ville =document.getElementById("ville").value;
    var msgErrVille =document.getElementById("erreur-adresse");
    
    if(ville === ""){
        msgErrVille.innerHTML="Veuillez remplir le champ de la ville";
        return false;
    } else if(ville.includes(",")){
        msgErrVille.innerHTML= "La ville ne doit pas contenir une virgule";
        return false;
    } else {
        msgErrVille.innerHTML = "";
        return true;
    }
}

//fonction pour valider le code postal
function validerCodepostal(){
    var code = document.getElementById("code-postal").value;
    var codeErreur = document.getElementById("erreur-codepostal");
    const codepostal =new RegExp('^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$') ;

    if(code === ""){
        codeErreur.innerHTML = "Le code postal est vide";
        return false;
    } else if(!(code.test(codepostal))) {
        codeErreur.innerHTML="Le code postal ne respecte pas le format valide.";
        return true;
    } else {
        codeErreur.innerHTML = "";
        return true;
    }
}

