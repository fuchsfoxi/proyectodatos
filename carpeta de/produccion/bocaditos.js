document.addEventListener("DOMContentLoaded", () => {

    const btnGuardar = document.getElementById("btn-guardar");
    const inputTipo = document.getElementById("input-tipo");
    const inputCantidad = document.getElementById("input-cantidad");
    const listaCartas = document.getElementById("lista-cartas");

    mostrarLista();

    btnGuardar.addEventListener("click", () => {
        const tipo = inputTipo.value;
        const cantidad = inputCantidad.value;

        if (!tipo || !cantidad) {
            alert("Por favor completa todos los campos");
            return;
        }

        const registro = {
            tipo: tipo,
            cantidad: cantidad,
            fecha: new Date().toLocaleDateString()
        };

        const datos = JSON.parse(localStorage.getItem("bocaditos")) || [];
        datos.push(registro);
        localStorage.setItem("bocaditos", JSON.stringify(datos));

        inputTipo.value = "";
        inputCantidad.value = "";

        mostrarLista();
    });

    function mostrarLista() {
        const datos = JSON.parse(localStorage.getItem("bocaditos")) || [];
        listaCartas.innerHTML = "";

        datos.forEach((registro) => {
            const carta = document.createElement("div");
            carta.innerHTML = `
                <p><strong>Tipo:</strong> ${registro.tipo}</p>
                <p><strong>Cantidad:</strong> ${registro.cantidad}</p>
                <p><strong>Fecha:</strong> ${registro.fecha}</p>
                <hr>
            `;
            listaCartas.appendChild(carta);
        });
    }
});