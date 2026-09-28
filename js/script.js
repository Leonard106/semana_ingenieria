const elementosAnimados = document.querySelectorAll('.reveal-text, .seccion-animada');

function revisarVisibilidad() {
    elementosAnimados.forEach(function(elemento) {
        const rect = elemento.getBoundingClientRect();
        const alturaVentana = window.innerHeight;
        if (rect.top < alturaVentana - 100) {
            elemento.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revisarVisibilidad);
window.addEventListener('load', revisarVisibilidad);


