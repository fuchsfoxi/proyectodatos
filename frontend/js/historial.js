const API = "http://localhost:8080/api/Produccion";

document.addEventListener("DOMContentLoaded", async () => {
    const tablaHistorial = document.getElementById("tabla-historial");
    const btnFiltrar     = document.getElementById("btn-filtrar");

    // cargar todo al entrar
    await renderTabla(await obtenerHistorial());

    btnFiltrar.addEventListener("click", async () => {
        const fecha = document.getElementById("filtro-fecha").value;
        const turno = document.getElementById("filtro-turno").value;
        const tipo  = document.getElementById("filtro-tipo").value;

        let historial = await obtenerHistorial();

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

        await renderTabla(historial);
    });

    async function obtenerHistorial() {
        const response = await fetch(API);
        return await response.json();
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
            tablaHistorial.innerHTML += `
                <tr>
                    <td>${r.fecha}</td>
                    <td>${r.tipo}</td>
                    <td>${r.nombre}</td>
                    <td>${r.turno || "-"}</td>
                    <td>${r.cantidad}</td>
                    <td>${r.latas || "-"}</td>
                </tr>
            `;
        });
    }
});