const API = "http://localhost:8080/api/Produccion";

document.addEventListener("DOMContentLoaded", async () => {
    const btnRegistrar = document.getElementById("btn-registrar");
    const tablaBody    = document.getElementById("tabla-body");

    await cargarTabla();

    btnRegistrar.addEventListener("click", async () => {
        const nombre   = document.getElementById("bocadito-nombre").value;
        const cantidad = document.getElementById("cantidad-bocaditos").value;

        if (!nombre || !cantidad) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const registro = {
            nombre: nombre,
            cantidad: parseInt(cantidad),
            turno: "",
            latas: 0,
            fecha: new Date().toLocaleDateString("es-PE"),
            tipo: "bocaditos"
        };

        await guardarRegistro(registro);
        await cargarTabla();

        document.getElementById("bocadito-nombre").value    = "";
        document.getElementById("cantidad-bocaditos").value = "";
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
        const bocaditos = datos.filter(r => r.tipo === "bocaditos");
        bocaditos.forEach(r => {
            tablaBody.innerHTML += `
                <tr>
                    <td>${r.nombre}</td>
                    <td>${r.cantidad}</td>
                </tr>
            `;
        });
    }
});