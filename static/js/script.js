// L'endroit où placer le code du front-end.

// Fonction pour valider le nom de l'animal:

function validerNomAnimal() {
    var nomAnimal = document.getElementById("nom-animal").value;
    var nomAnimalErreur = document.getElementById("nom-animal-erreur");

    if (nomAnimal.length < 2) {
        nomAnimalErreur.innerHTML = "Le nom de l'animal doit contenir au moins 2 caractères.";
        return false;
    } 
    else if (nomAnimal.length > 10) {
        nomAnimalErreur.innerHTML = "Le nom de l'animal ne peut pas contenir plus de 10 caractères.";
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
    else if (ageAnimal > 50) {
        ageAnimalErreur.innerHTML = "L'âge de l'animal ne peut pas être supérieur à 50 ans.";
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