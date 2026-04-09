document.addEventListener("DOMContentLoaded", () => {

    const btnGuardar = document.getElementById("btn-guardar");
    const inputTipo = document.getElementById("input-tipo");
    const inputTurno = document.getElementById("input-turno");
    const inputCantidad = document.getElementById("input-cantidad");
    const inputLatas = document.getElementById("input-latas");
    const listaCartas = document.getElementById("lista-cartas");

    mostrarLista();

    btnGuardar.addEventListener("click", () => {
        const tipo = inputTipo.value;
        const turno = inputTurno.value;
        const cantidad = inputCantidad.value;
        const latas = inputLatas.value;

        if (!tipo || !turno || !cantidad) {
            alert("Por favor completa todos los campos");
            return;
        }

        const registro = {
            tipo: tipo,
            turno: turno,
            cantidad: cantidad,
            latas: latas,
            fecha: new Date().toLocaleDateString()
        };

        // Guardar en localStorage
        const datos = JSON.parse(localStorage.getItem("panes")) || [];
        datos.push(registro);
        localStorage.setItem("panes", JSON.stringify(datos));

        // Limpiar campos
        inputTipo.value = "";
        inputTurno.value = "";
        inputCantidad.value = "";
        inputLatas.value = "";

        mostrarLista();
    });

    function mostrarLista() {
        const datos = JSON.parse(localStorage.getItem("panes")) || [];
        listaCartas.innerHTML = "";

        datos.forEach((registro) => {
            const carta = document.createElement("div");
            carta.innerHTML = `
                <p><strong>Tipo:</strong> ${registro.tipo}</p>
                <p><strong>Turno:</strong> ${registro.turno}</p>
                <p><strong>Cantidad:</strong> ${registro.cantidad}</p>
                <p><strong>Latas:</strong> ${registro.latas}</p>
                <p><strong>Fecha:</strong> ${registro.fecha}</p>
                <hr>
            `;
            listaCartas.appendChild(carta);
        });
    }
});