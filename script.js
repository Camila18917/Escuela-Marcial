/* NAVAR1 */
document.addEventListener('DOMContentLoaded', function() {
    const ingreso = document.getElementById('ingreso');
    const submenu = document.getElementById('ingresar');

    ingreso.addEventListener('click', function(event) {
        submenu.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!ingreso.contains(event.target) && !submenu.contains(event.target)) {
            submenu.classList.remove('show');
        }
    });
});



/* NAVAR2 */
function hamb(){
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
}


/* HOME */
function enviar() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const consulta = document.getElementById('consulta').value;

    if (nombre === '' ||apellido === '' ||telefono === '' ||email === '' ||consulta === '') {
        return false;
    } else {
        alert(`¡Se envio con exito tu consulta !`);
        return true;
    }
}

