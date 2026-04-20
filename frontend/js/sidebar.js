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
});
});