// Etape 1 - Sélectionner nos éléments
const input = document.querySelector("#prix")
const error = document.querySelector("small")
const formulaire = document.querySelector("#formulaire")
const bouton = document.querySelector("button")
const instructions = document.querySelector("#instructions")

// Etape 2 - Cacher l'erreur
error.style.display = "none"

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001)
let coups = 0
let nombreChoisi

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
    const instruction = document.createElement("div")

    if (nombre < nombreAleatoire) {
        // c'est plus
        instruction.innerHTML = `#${coups} - Vous avez proposé ${nombre}. C'est plus`
        instruction.className = "plus"
    } else if(nombre > nombreAleatoire) {
        // c'est moins
        instruction.innerHTML = `#${coups} - Vous avez proposé ${nombre}. C'est moins`
        instruction.className = "moins"
    } else {
        // Félicitations !
        instruction.innerHTML = `#${coups} - Félicitations ! Vous avez trouvé le juste prix (${nombre}) !`
        instruction.className = "fini"
    }

    instructions.prepend(instruction)

}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre


input.addEventListener("keyup", () => {
    if ( isNaN(input.value) ) {
        error.style.display = "inline"
    } else {
        error.style.display = "none"
    }
})

// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    if ( isNaN(input.value) || input.value === "") {
        input.style.borderColor = "red"
    } else {
        input.style.borderColor = "silver"
        coups++
        nombreChoisi = input.value
        input.value = ""
        verifier(nombreChoisi)
    }
})


