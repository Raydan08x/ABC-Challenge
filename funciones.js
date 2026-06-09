let contador = 0;

function voltear(card){

    if(
        !card.classList.contains("volteada") &&
        !card.dataset.vista
    ){
        contador++;
        card.dataset.vista = "true";

        document.getElementById("contador").textContent =
        "Letras vistas: " + contador;
    }

    card.classList.toggle("volteada");
}

function filtrar(tipo){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if(tipo === "todas"){
            card.style.display = "block";
        }

        else if(tipo === "vocales"){

            if(card.dataset.tipo === "vocal"){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        }

    });

}