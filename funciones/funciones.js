// Aquí es donde va la ventana de alerta / entradas
function mostrarAlerta() {
    alert("¡Rellena el formulario si no te quieres quedar sin plaza!");
}

// Aquí es donde voy a mostrar la fecha actual / programa
function mostrarFecha() {
    const fecha = new Date();
    alert("Hoy es: " + fecha.toLocaleDateString());
}

// Aquí es donde voy a cambiar el fondo / expositores
function cambiarColorFondo() {
    document.body.style.backgroundImage = "none"; // elimina la foto
    document.body.style.backgroundColor = "#f0f8ff"; // pone un color nuevo
    alert("¡Fondo cambiado!");
}

// Aquí es donde voy a poner el saludo personalizado / inicio
function saludarUsuario() {
    const nombre = prompt("¿Cómo te llamas?");
    if (nombre) {
        alert("¡Hola, " + nombre + "! Bienvenid@ a la web de la feria de turismo.");
    } else {
        alert("No escribiste tu nombre 😅");
    }
}

// Aquí es donde va a contar los caracteres / destinos
function contarCaracteres() {
    // Si existe un campo con id "nombre", lo usa
    const campo = document.getElementById("nombre");

    if (campo && campo.value) {
        alert("Tu destino favorito tiene " + campo.value.length + " caracteres.");
    } else {
        // Si no hay campo o está vacío, pide el texto con prompt
        const destino = prompt("Introduce el nombre del destino para contar sus caracteres:");
        if (destino) {
            alert("Tu destino favorito tiene " + destino.length + " caracteres.");
        } else {
            alert("No escribiste ningún destino 😅");
        }
    }
}









  
