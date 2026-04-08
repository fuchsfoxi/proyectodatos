        const btn = document.getElementById("menu-btn");
        const menu = document.getElementById("menu");
        const cerrar = document.getElementById("cerrar-menu");

        btn.addEventListener("click", () => {
            menu.style.display = "block";
        });

        cerrar.addEventListener("click", () => {
            menu.style.display = "none";
        });