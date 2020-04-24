function comenzar() {
    zonadatos = document.getElementById("zonadatos");
    var boton = document.getElementById("boton");
    boton.addEventListener("click", leer, false);
}

function leer() {
    var url = "texto.txt";
    var solicitud = new XMLHttpRequest(); //construimos un objeto 
    solicitud.addEventListener("load", mostrar, false);
    solicitud.open("GET", url, true);
    solicitud.send(null);
}

function mostrar(e) {
    zonadatos.innerHTML = e.target.responseText;
}
window.addEventListener("load", comenzar, false);