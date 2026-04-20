const API = "http://localhost:8080/api/Produccion";

document.addEventListener("DOMContentLoaded", async () => {
    const btnRegistrar = document.getElementById("btn-registrar");
    const tablaBody    = document.getElementById("tabla-body");

    // cargar datos al entrar
    await cargarTabla();

    btnRegistrar.addEventListener("click", async () => {
        const tipoPan     = document.getElementById("tipo-pan").value;
        const cantidadPan = document.getElementById("cantidad-pan").value;
        const turno       = document.getElementById("turno").value;
        const canLatas    = document.getElementById("can-latas").value;

        if (!tipoPan || !cantidadPan || !turno || !canLatas) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const registro = {
            nombre: tipoPan,
            cantidad: parseInt(cantidadPan),
            turno: turno,
            latas: parseInt(canLatas),
            fecha: new Date().toLocaleDateString("es-PE"),
            tipo: "panes"
        };

        await guardarRegistro(registro);
        await cargarTabla();

        document.getElementById("tipo-pan").value     = "";
        document.getElementById("cantidad-pan").value = "";
        document.getElementById("turno").value        = "";
        document.getElementById("can-latas").value    = "";
    });

    async function guardarRegistro(registro) {
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(registro)
        });
    }

    async function cargarTabla() {
        const response = await fetch(API);
        const datos    = await response.json();
        tablaBody.innerHTML = "";
        const panes = datos.filter(r => r.tipo === "panes");
        panes.forEach(r => {
            tablaBody.innerHTML += `
                <tr>
                    <td>${r.nombre}</td>
                    <td>${r.turno}</td>
                    <td>${r.cantidad}</td>
                    <td>${r.latas}</td>
                </tr>
            `;
        });
    }
});