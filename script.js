/* CARGA PANTALLA DE DOCENTE/ALUMNO */
window.addEventListener('load', function() { 

    setTimeout(function() {
        document.getElementById('loaderContainer').style.display = 'none';
        document.getElementById('Bienvenidos').style.display = 'block'; 
        document.body.style.overflow = 'auto';
    }, 3000); 
});

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('cartel');
    const showContentButton = document.getElementById('Button');
    const content = document.getElementById('content');

    showContentButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        content.style.display = 'block'; 
    })
})




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
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const consulta = document.getElementById('consulta').value;
    const email = document.getElementById('email').value;
    const validador = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Verificar si hay campos vacíos
    if (nombre === '' || apellido === '' || telefono === '' || email === 'ejemplo@gmail.com' || consulta === '') {
        alert("Por favor, complete todos los campos.");
        return false; // Detener el envío si hay campos vacíos
    }
    if (validador.test(email)){
    alert("¡Se envió con éxito tu consulta!");
    return true; // Permitir el envío del formulario
    }
}



/* ALUMNO/DOCENTE FORMULARIO*/
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('email').value;
    const contrasena = document.getElementById('contraseña').value;

    fetch('usuarios.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(usuarios => {
            const usuarioEncontrado = usuarios.find(user => user.usuario === usuario && user.contraseña === contrasena);

            if (usuarioEncontrado) {
                if (usuarioEncontrado.rol === 'docente') {
                    window.location.href = '8-campusdecent.html';
                }
                 if (usuarioEncontrado.rol === 'alumno'){
                    window.location.href = '7-campusalumn.html';
                }
            } else {
               alert('Usuario o contraseña incorrectos')
            }
        })
});

