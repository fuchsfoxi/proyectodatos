document.addEventListener("DOMContentLoaded", () => {
    const tablaHistorial = document.getElementById("tabla-historial");
    const btnFiltrar     = document.getElementById("btn-filtrar");

    // cargar todo al entrar
    renderTabla(obtenerHistorial());

    btnFiltrar.addEventListener("click", () => {
        const fecha = document.getElementById("filtro-fecha").value;
        const turno = document.getElementById("filtro-turno").value;
        const tipo  = document.getElementById("filtro-tipo").value;

        let historial = obtenerHistorial();

        if (fecha) {
            const fechaFormateada = new Date(fecha).toLocaleDateString("es-PE");
            historial = historial.filter(r => r.fecha === fechaFormateada);
        }

        if (turno) {
            historial = historial.filter(r => r.turno === turno);
        }

        if (tipo) {
            historial = historial.filter(r => r.tipo === tipo);
        }

        renderTabla(historial);
    });

    function obtenerHistorial() {
        return JSON.parse(localStorage.getItem("historial")) || [];
    }

    function renderTabla(historial) {
        tablaHistorial.innerHTML = "";

        if (historial.length === 0) {
            tablaHistorial.innerHTML = `
                <tr>
                    <td colspan="6" class="text-center">No hay registros</td>
                </tr>
            `;
            return;
        }

        historial.forEach(r => {
            const fila = `
                <tr>
                    <td>${r.fecha}</td>
                    <td>${r.tipo}</td>
                    <td>${r.nombre}</td>
                    <td>${r.turno || "-"}</td>
                    <td>${r.cantidad}</td>
                    <td>${r.latas || "-"}</td>
                </tr>
            `;
            tablaHistorial.innerHTML += fila;
        });
    }
});