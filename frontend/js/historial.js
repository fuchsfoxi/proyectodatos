const API_PRODUCCION = "http://localhost:8080/api/Produccion";

document.addEventListener("DOMContentLoaded", async () => {
    const tablaHistorial = document.getElementById("tabla-historial");
    const btnFiltrar     = document.getElementById("btn-filtrar");

    await renderTabla(await obtenerHistorial());

    btnFiltrar.addEventListener("click", async () => {
        const turno = document.getElementById("filtro-turno").value;
        const tipo  = document.getElementById("filtro-tipo").value;

        let historial = await obtenerHistorial();

        if (turno) {
            historial = historial.filter(r => r.turno.turno === turno);
        }

        if (tipo) {
            historial = historial.filter(r => r.producto.tipo.tipo.toLowerCase() === tipo);
        }

        await renderTabla(historial);
    });

    async function obtenerHistorial() {
        return await fetch(API_PRODUCCION).then(r => r.json());
    }

    function renderTabla(historial) {
        tablaHistorial.innerHTML = "";

        if (historial.length === 0) {
            tablaHistorial.innerHTML = `
                <tr>
                    <td colspan="5" class="text-center">No hay registros</td>
                </tr>
            `;
            return;
        }

        historial.forEach(r => {
            tablaHistorial.innerHTML += `
                <tr>
                    <td>${new Date(r.fecha).toLocaleDateString("es-PE")}</td>
                    <td>${r.producto.tipo.tipo}</td>
                    <td>${r.producto.nombre}</td>
                    <td>${r.turno.turno}</td>
                    <td>${r.cantidad}</td>
                </tr>
            `;
        });
    }
});