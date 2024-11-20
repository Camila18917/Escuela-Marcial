/* SUB NAVAR  */
// Obtener el modal, la palabra para abrirlo y el botón de cerrar
const infoa = document.getElementById("infoa");
const popupTrigger = document.querySelector(".popup-trigger");
const cerrar = document.getElementById("cerrari");




// Cuando se hace clic en la palabra, se muestra el modal
popupTrigger.addEventListener("click", () => {
  infoa.style.display = "flex";  // Mostrar el modal
});

// Cuando se hace clic en la cruz para cerrar el modal
cerrar.addEventListener("click", () => {
  infoa.style.display = "none";  // Ocultar el modal
});

// Cuando se hace clic fuera del modal, también se cierra
window.addEventListener("click", (event) => {
  if (event.target === infoa) {
    infoa.style.display = "none";  // Ocultar el modal si se hace clic fuera
  }
});


