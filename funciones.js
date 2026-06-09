let letrasVistas = new Set();

function voltear(card) {
    card.classList.toggle("volteada");

    const letra = card.querySelector(".card-frente h1").textContent;

    if (!letrasVistas.has(letra)) {
        letrasVistas.add(letra);
        actualizarContador();
    }
}

function actualizarContador() {
    const contador = document.getElementById("completed-count");
    contador.textContent = letrasVistas.size;
}

function filtrar(tipo) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const esVocal = card.dataset.tipo === "vocal";

        if (tipo === "todas") {
            card.style.display = "block";
        }

        if (tipo === "vocales") {
            card.style.display = esVocal ? "block" : "none";
        }
    });
}