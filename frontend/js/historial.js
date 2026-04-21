const API_PRODUCCION = "http://localhost:8080/api/Produccion";

document.addEventListener("DOMContentLoaded", async () => {
    const tablaHistorial = document.getElementById("tabla-historial");
    const btnFiltrar     = document.getElementById("btn-filtrar");

    // Cargar tabla al inicio
    await renderTabla(await obtenerHistorial());

    // Evento del botón filtrar
    btnFiltrar.addEventListener("click", async () => {
        const fecha = document.getElementById("filtro-fecha").value;
        const turno = document.getElementById("filtro-turno").value;
        const tipo  = document.getElementById("filtro-tipo").value;

        let historial = await obtenerHistorial();

        // Filtro por fecha
        if (fecha) {
            historial = historial.filter(r => {
                const fechaRegistro = new Date(r.fecha).toISOString().split("T")[0];
                return fechaRegistro === fecha;
            });
        }

        // Filtro por turno — normaliza ambos lados (quita tildes y pasa a minúsculas)
        if (turno) {
            historial = historial.filter(r => {
                const turnoBackend = r.turno?.turno ?? "";
                return turnoBackend
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    === turno;
            });
        }

        // Filtro por tipo
        if (tipo) {
            historial = historial.filter(r =>
                r.producto?.tipo?.tipo?.toLowerCase() === tipo
            );
        }

        await renderTabla(historial);
    });

    // Obtener datos del backend
    async function obtenerHistorial() {
        try {
            const response = await fetch(API_PRODUCCION);
            console.log("Status:", response.status);
            const data = await response.json();
            console.log("Datos recibidos:", data);
            console.log("Primer registro:", data[0]);
            return data;
        } catch (error) {
            console.error("Error al obtener historial:", error);
            return [];
        }
    }

    // Renderizar tabla
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
                    <td>${new Date(r.fecha).toLocaleDateString("es-PE")}</td>
                    <td>${r.producto?.tipo?.tipo ?? "—"}</td>
                    <td>${r.producto?.nombre ?? "—"}</td>
                    <td>${r.turno?.turno ?? "Sin turno"}</td>
                    <td>${r.cantidad}</td>
                    <td>${r.latas ?? "—"}</td>
                </tr>
            `;
        });
    }

}); // ← cierre del DOMContentLoaded