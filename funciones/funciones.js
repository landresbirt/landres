<!-- Este va a ser el fichero llamado funciones.js -->

  function mostrarAlerta() {
    alert("¡Rellena el formulario si no te quieres quedar sin plaza!");
}

// 2️⃣ Muestra la fecha actual
function mostrarFecha() {
    const fecha = new Date();
    alert("Hoy es: " + fecha.toLocaleDateString());
}

// 3️⃣ Cambia el color de fondo del cuerpo de la página
function cambiarColorFondo() {
    document.body.style.backgroundColor = "#f0f8ff"; // color azul claro
    alert("¡Color de fondo cambiado!");
}

// 4️⃣ Pide el nombre del usuario y lo saluda
function saludarUsuario() {
    const nombre = prompt("¿Cómo te llamas?");
    if (nombre) {
        alert("¡Hola, " + nombre + "! Bienvenido a la web de turismo.");
    } else {
        alert("No escribiste tu nombre 😅");
    }
}

// 5️⃣ Cuenta los caracteres escritos en el campo 'nombre'
function contarCaracteres() {
    const campo = document.getElementById("nombre");
    const longitud = campo.value.length;
    alert("Tu nombre tiene " + longitud + " caracteres.");
}










  
