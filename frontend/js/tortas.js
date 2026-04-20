const API_PRODUCCION = "http://localhost:8080/api/Produccion";
const API_PRODUCTO   = "http://localhost:8080/api/Producto";
const API_TURNO      = "http://localhost:8080/api/Turno";

document.addEventListener("DOMContentLoaded", async () => {
    const btnRegistrar = document.getElementById("btn-registrar");
    const tablaBody    = document.getElementById("tabla-body");
    const selectTorta  = document.getElementById("tortas-nombre");

    // Cargar productos tipo Torta en el select
    const productos = await fetch(API_PRODUCTO).then(r => r.json());
    const tortas = productos.filter(p => p.tipo && p.tipo.tipo === "Torta");
    selectTorta.innerHTML = '<option value="">Tipo de torta</option>';
    tortas.forEach(p => {
        selectTorta.innerHTML += `<option value="${p.id_producto}">${p.nombre}</option>`;
    });

    await cargarTabla();

    btnRegistrar.addEventListener("click", async () => {
        const idProducto = document.getElementById("tortas-nombre").value;
        const cantidad   = document.getElementById("cantidad-torta").value;

        if (!idProducto || !cantidad) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const registro = {
            cantidad: parseInt(cantidad),
            fecha: new Date().toISOString(),
            producto: { id_producto: parseInt(idProducto) },
            turno:    { id_turno: 1 } // ajusta si tienes select de turno
        };

        await fetch(API_PRODUCCION, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(registro)
        });

        await cargarTabla();

        document.getElementById("tortas-nombre").value  = "";
        document.getElementById("cantidad-torta").value = "";
    });

    async function cargarTabla() {
        const datos = await fetch(API_PRODUCCION).then(r => r.json());
        tablaBody.innerHTML = "";

        const tortas = datos.filter(r =>
            r.producto &&
            r.producto.tipo &&
            r.producto.tipo.tipo === "Torta" &&
            r.turno
        );

        tortas.forEach(r => {
            tablaBody.innerHTML += `
                <tr>
                    <td>${r.producto.nombre}</td>
                    <td>${r.cantidad}</td>
                </tr>
            `;
        });
    }
});