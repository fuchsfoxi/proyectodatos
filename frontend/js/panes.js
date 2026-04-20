document.addEventListener("DOMContentLoaded", () => {
    const btnRegistrar = document.getElementById("btn-registrar");
    const tablaBody    = document.getElementById("tabla-body");

    // cargar datos guardados al entrar a la página
    cargarTabla();

    btnRegistrar.addEventListener("click", () => {
        const tipoPan     = document.getElementById("tipo-pan").value;
        const cantidadPan = document.getElementById("cantidad-pan").value;
        const turno       = document.getElementById("turno").value;
        const canLatas    = document.getElementById("can-latas").value;

        if (!tipoPan || !cantidadPan || !turno || !canLatas) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const registro = {
            tipo: "panes",
            nombre: tipoPan,
            cantidad: cantidadPan,
            turno: turno,
            latas: canLatas,
            fecha: new Date().toLocaleDateString("es-PE")
        };

        // guardar en localStorage
        guardarRegistro(registro);

        // agregar fila a la tabla
        agregarFila(registro);

        // limpiar campos
        document.getElementById("tipo-pan").value    = "";
        document.getElementById("cantidad-pan").value = "";
        document.getElementById("turno").value        = "";
        document.getElementById("can-latas").value    = "";
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
                <td>${registro.turno}</td>
                <td>${registro.cantidad}</td>
                <td>${registro.latas}</td>
            </tr>
        `;
        tablaBody.innerHTML += fila;
    }

    function cargarTabla() {
        const historial = JSON.parse(localStorage.getItem("historial")) || [];
        const panes = historial.filter(r => r.tipo === "panes");
        panes.forEach(r => agregarFila(r));
    }
});