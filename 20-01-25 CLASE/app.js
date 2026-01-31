
function saludo(nombre, mensaje, edad) {
    console.log(`Hola ${nombre}, ${mensaje}, edad ${edad}`);
}document.addEventListener("DOMContentLoaded", () => {
    const parrafo = document.getElementById("parrafo-cambiante-1");
    const boton = document.getElementById("btn-cambiador");

    parrafo.innerText = "Empanada de carne con pancito";

    boton.addEventListener("click", () => {
        parrafo.style.color = "red";
    });
});

function saludo(nombre, mensaje, edad) {
    console.log(`Hola ${nombre}, ${mensaje}, edad ${edad}`);
}
