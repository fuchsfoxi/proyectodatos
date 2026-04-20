const API_PRODUCCION = "http://localhost:8080/api/Produccion";
const API_PRODUCTO   = "http://localhost:8080/api/Producto";
const API_TURNO      = "http://localhost:8080/api/Turno";

document.addEventListener("DOMContentLoaded", async () => {
    const btnRegistrar = document.getElementById("btn-registrar");
    const tablaBody    = document.getElementById("tabla-body");
    const selectPan    = document.getElementById("tipo-pan");
    const selectTurno  = document.getElementById("turno");

    // Cargar productos tipo Pan en el select
    const productos = await fetch(API_PRODUCTO).then(r => r.json());
    const panes = productos.filter(p => p.tipo && p.tipo.tipo === "Pan");
    selectPan.innerHTML = '<option value="">Tipo de pan</option>';
    panes.forEach(p => {
        selectPan.innerHTML += `<option value="${p.id_producto}">${p.nombre}</option>`;
    });

    // Cargar turnos en el select
    const turnos = await fetch(API_TURNO).then(r => r.json());
    selectTurno.innerHTML = '<option value="">Turno</option>';
    turnos.forEach(t => {
        selectTurno.innerHTML += `<option value="${t.id_turno}">${t.turno}</option>`;
    });

    // Cargar tabla al inicio
    await cargarTabla();

    btnRegistrar.addEventListener("click", async () => {
        const idProducto  = document.getElementById("tipo-pan").value;
        const cantidadPan = document.getElementById("cantidad-pan").value;
        const idTurno     = document.getElementById("turno").value;
        const canLatas    = document.getElementById("can-latas").value;

        if (!idProducto || !cantidadPan || !idTurno || !canLatas) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const registro = {
            cantidad: parseInt(cantidadPan),
            fecha: new Date().toISOString(),
            producto: { id_producto: parseInt(idProducto) },
            turno:    { id_turno:    parseInt(idTurno) }
        };

        await fetch(API_PRODUCCION, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(registro)
        });

        await cargarTabla();

        document.getElementById("tipo-pan").value     = "";
        document.getElementById("cantidad-pan").value = "";
        document.getElementById("turno").value        = "";
        document.getElementById("can-latas").value    = "";
    });

    // ← Una sola función cargarTabla, con filtro defensivo
    async function cargarTabla() {
        const datos = await fetch(API_PRODUCCION).then(r => r.json());
        tablaBody.innerHTML = "";

        const panes = datos.filter(r =>
            r.producto &&
            r.producto.tipo &&
            r.producto.tipo.tipo === "Pan" &&
            r.turno
        );

        panes.forEach(r => {
            tablaBody.innerHTML += `
                <tr>
                    <td>${r.producto.nombre}</td>
                    <td>${r.turno.turno}</td>
                    <td>${r.cantidad}</td>
                    <td>-</td>
                </tr>
            `;
        });
    }
});