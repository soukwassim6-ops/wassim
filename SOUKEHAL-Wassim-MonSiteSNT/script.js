let angle = 0;
const image = document.getElementById("imageTourne");

function rotationAutomatique() {
    angle += 1; // degré à chaque frame
    image.style.transform = "rotate(" + angle + "deg)";
    requestAnimationFrame(rotationAutomatique); // relance la fonction
}

rotationAutomatique(); // démarre la rotation
function devineNombre() {
    const nombreMystere = Math.floor(Math.random() * 10) + 1;
    const saisie = parseInt(document.getElementById("guessInput").value);
    const resultat = document.getElementById("resultat");

    if (saisie === nombreMystere) {
        resultat.textContent = "Bravo ! Tu as deviné le nombre " + nombreMystere + " 🎉";
    } else {
        resultat.textContent = "Dommage ! Le nombre était " + nombreMystere + ". Essaie encore !";
    }
}


