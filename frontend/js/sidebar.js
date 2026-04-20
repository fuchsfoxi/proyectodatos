document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const sidebar   = document.querySelector(".sidebar");
    const overlay   = document.querySelector(".overlay");

    function openSidebar() {
        sidebar.classList.add("open");
        overlay.classList.add("show");
    }

    function closeSidebar() {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
    }

    hamburger.addEventListener("click", openSidebar);
    overlay.addEventListener("click", closeSidebar);

    // Submenú dropdown
    const dropdownLink = document.querySelector('.nav-link-dropdown');
    const submenu      = document.querySelector('.submenu');

    dropdownLink.addEventListener('click', (e) => {
        e.preventDefault();
        submenu.classList.toggle('abierto');
        document.querySelector('.flecha').classList.toggle('rotado');
    });
});