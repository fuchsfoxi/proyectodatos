const API_PRODUCCION = "http://localhost:8080/api/Produccion";
const API_PRODUCTO   = "http://localhost:8080/api/Producto";
const API_TURNO      = "http://localhost:8080/api/Turno";

document.addEventListener("DOMContentLoaded", async () => {
    const btnRegistrar = document.getElementById("btn-registrar");
    const tablaBody    = document.getElementById("tabla-body");
    const selectBocadito = document.getElementById("bocadito-nombre"); // asumiendo que es un <select>

    // Cargar productos tipo Bocadito en el select
    const productos = await fetch(API_PRODUCTO).then(r => r.json());
    const bocaditos = productos.filter(p => p.tipo && p.tipo.tipo === "Bocadito");
    selectBocadito.innerHTML = '<option value="">Tipo de bocadito</option>';
    bocaditos.forEach(p => {
        selectBocadito.innerHTML += `<option value="${p.id_producto}">${p.nombre}</option>`;
    });

    await cargarTabla();

    btnRegistrar.addEventListener("click", async () => {
        const idProducto = document.getElementById("bocadito-nombre").value;
        const cantidad   = document.getElementById("cantidad-bocaditos").value;

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

        document.getElementById("bocadito-nombre").value    = "";
        document.getElementById("cantidad-bocaditos").value = "";
    });

    async function cargarTabla() {
        const datos = await fetch(API_PRODUCCION).then(r => r.json());
        tablaBody.innerHTML = "";

        const bocaditos = datos.filter(r =>
            r.producto &&
            r.producto.tipo &&
            r.producto.tipo.tipo === "Bocadito" &&
            r.turno
        );

        bocaditos.forEach(r => {
            tablaBody.innerHTML += `
                <tr>
                    <td>${r.producto.nombre}</td>
                    <td>${r.cantidad}</td>
                </tr>
            `;
        });
    }
});