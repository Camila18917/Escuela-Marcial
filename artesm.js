/* SUB NAVAR  */
// Obtener el modal, la palabra para abrirlo y el botón de cerrar
const infoa = document.getElementById("infoa");
const infoa2 = document.getElementById("infoa2");
const infoa3 = document.getElementById("infoa3");
const infoa4 = document.getElementById("infoa4");
const infoa5 = document.getElementById("infoa5");
const infoa6 = document.getElementById("infoa6");
const popupTrigger = document.querySelector(".arte1");
const popupTrigger2 = document.querySelector(".arte2");
const popupTrigger3 = document.querySelector(".arte3");
const popupTrigger4 = document.querySelector(".arte4");
const popupTrigger5 = document.querySelector(".arte5");
const popupTrigger6 = document.querySelector(".arte6");
const cerrar = document.getElementById("cerrar1");
const cerrar2 = document.getElementById("cerrar2");
const cerrar3 = document.getElementById("cerrar3");
const cerrar4 = document.getElementById("cerrar4");
const cerrar5 = document.getElementById("cerrar5");
const cerrar6 = document.getElementById("cerrar6");

// Cuando se hace clic en la palabra, se muestra el modal
popupTrigger.addEventListener("click", () => {
  infoa.style.display = "flex";  // Mostrar el modal
});
popupTrigger2.addEventListener("click", () => {
    infoa2.style.display = "flex";  // Mostrar el modal
  });
  popupTrigger3.addEventListener("click", () => {
    infoa3.style.display = "flex";  // Mostrar el modal
  });
  popupTrigger4.addEventListener("click", () => {
    infoa4.style.display = "flex";  // Mostrar el modal
  });
  popupTrigger5.addEventListener("click", () => {
    infoa5.style.display = "flex";  // Mostrar el modal
  });
  popupTrigger6.addEventListener("click", () => {
    infoa6.style.display = "flex";  // Mostrar el modal
  });



  
// Cuando se hace clic en la cruz para cerrar el modal
cerrar.addEventListener("click", () => {
    infoa.style.display = "none";
});
cerrar2.addEventListener("click", () => {
    infoa2.style.display = "none";
});
  cerrar3.addEventListener("click", () => {
    infoa3.style.display = "none";
});
  cerrar4.addEventListener("click", () => {
    infoa4.style.display = "none";
});
  cerrar5.addEventListener("click", () => {
    infoa5.style.display = "none";
});
cerrar6.addEventListener("click", () => {
    infoa6.style.display = "none";
});
