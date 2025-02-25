document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".hamburguesa");
    const navegacion = document.querySelector(".navegacion");

    const eventos = () => {
        menu.addEventListener("click", abrirMenu);
    };

    const botonCerrar = () => {
        const btnCerrar = document.createElement("p");
        const overlay = document.createElement("div");
        overlay.classList.add("pantalla-completa");
        const body = document.querySelector("body");
        if (document.querySelectorAll(".pantalla-completa").length > 0) return;
        body.appendChild(overlay);
        btnCerrar.textContent = "x";
        btnCerrar.classList.add("btnCerrar");
        navegacion.appendChild(btnCerrar); 
        cerrarMenu(btnCerrar, overlay);
    };

    const abrirMenu = () => {
        navegacion.classList.remove("ocultar");
        botonCerrar();
    };

    const cerrarMenu = (boton, overlay) => {
        boton.addEventListener("click", () => {
            navegacion.classList.add("ocultar");
            overlay.remove();
            boton.remove();
        });
        overlay.onclick = function () {
            overlay.remove();
            navegacion.classList.add("ocultar");
            boton.remove();
        };
    };
    eventos();
   })
