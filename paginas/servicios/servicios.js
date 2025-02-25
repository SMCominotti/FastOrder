document.addEventListener("DOMContentLoaded", function () {
    const servicios = document.querySelectorAll('.tipo-restaurante, .funcionalidad');
    const btnTodos = document.querySelector('.todos');
    const btnRestaurante = document.querySelector('.filtro-restaurante');
    const btnFuncionalidad = document.querySelector('.filtro-funcionalidad');

    // Filtros
    function mostrarTodos() {
        servicios.forEach((servicio) => {
            servicio.style.display = "block"; // Muestra todos los servicios
        });
    }

    function filtrarRestaurante() {
        servicios.forEach((servicio) => {
            if (servicio.classList.contains("tipo-restaurante")) {
                servicio.style.display = "block"; // Muestra los de tipo restaurante
            } else {
                servicio.style.display = "none";
            }
        });
    }

    function filtrarFuncionalidad() {
        servicios.forEach((servicio) => {
            if (servicio.classList.contains("funcionalidad")) {
                servicio.style.display = "block"; 
            } else {
                servicio.style.display = "none"; 
            }
        });
    }

    // Agregar eventos a los botones
    btnTodos.addEventListener("click", mostrarTodos);
    btnRestaurante.addEventListener("click", filtrarRestaurante);
    btnFuncionalidad.addEventListener("click", filtrarFuncionalidad);

    // Por defecto, mostramos todos los servicios al cargar la página
    mostrarTodos();
});
