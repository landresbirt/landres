<!-- Aquí es donde va la ventana de alerta / entradas -->

  function mostrarAlerta() {
    alert("¡Rellena el formulario si no te quieres quedar sin plaza!");
}

<!-- Aquí es donde voy a mostras la fecha actual / programa -->
  
function mostrarFecha() {
    const fecha = new Date();
    alert("Hoy es: " + fecha.toLocaleDateString());
}

<!-- Aquí es donde voy a cambiar el fondo / expositores -->
  
function cambiarColorFondo() {
    document.body.style.backgroundImage = "none"; // elimina la foto
    document.body.style.backgroundColor = "#f0f8ff"; // pone un color nuevo
    alert("¡Fondo cambiado!");
}

<!-- Aquí es donde voy a poner el saludo personalizado / inicio -->
  
function saludarUsuario() {
    const nombre = prompt("¿Cómo te llamas?");
    if (nombre) {
        alert("¡Hola, " + nombre + "! Bienvenid@ a la web de la feria de turismo.");
    } else {
        alert("No escribiste tu nombre 😅");
    }
}

<!-- Aquí es donde va a contar los caráteres / destinos -->
  
function contarCaracteres() {
    const campo = document.getElementById("nombre");
    const longitud = campo.value.length;
    alert("Tu destino favorito tiene " + longitud + " caracteres.");
}










  
