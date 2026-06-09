class GestorABC {
    this.contador = contador;
    this.card = cards;
    this.letrasVistas=0;

}


actualizarContador(){
    this.contador.textContent = this.letrasVistas + "letras vistas" ;
}

voltear(card){
    card.classList.toggle ("volteada");


    if (!card.classList.contains("vista")){
        card.List.add ("vista");
        tis.letrasVistas++;
        this.actualizarContador();
    }
}

filtrar(tipo){


}