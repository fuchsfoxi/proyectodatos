document.addEventListener("DOMContentLoaded", () => {
    const btnRegistrar = document.getElementById("btn-registrar");
    const tablaBody    = document.getElementById("tabla-body");

    cargarTabla();

    btnRegistrar.addEventListener("click", () => {
        const nombre   = document.getElementById("tortas-nombre").value;
        const cantidad = document.getElementById("cantidad-torta").value;

        if (!nombre || !cantidad) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const registro = {
            tipo: "tortas",
            nombre: nombre,
            cantidad: cantidad,
            turno: "",
            latas: "",
            fecha: new Date().toLocaleDateString("es-PE")
        };

        guardarRegistro(registro);
        agregarFila(registro);

        document.getElementById("tortas-nombre").value   = "";
        document.getElementById("cantidad-torta").value  = "";
    });

    function guardarRegistro(registro) {
        const historial = JSON.parse(localStorage.getItem("historial")) || [];
        historial.push(registro);
        localStorage.setItem("historial", JSON.stringify(historial));
    }

    function agregarFila(registro) {
        const fila = `
            <tr>
                <td>${registro.nombre}</td>
                <td>${registro.cantidad}</td>
            </tr>
        `;
        tablaBody.innerHTML += fila;
    }

    function cargarTabla() {
        const historial = JSON.parse(localStorage.getItem("historial")) || [];
        const tortas = historial.filter(r => r.tipo === "tortas");
        tortas.forEach(r => agregarFila(r));
    }
});