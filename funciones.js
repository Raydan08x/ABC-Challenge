function voltear(card) {
    card.classList.toggle("volteada");
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