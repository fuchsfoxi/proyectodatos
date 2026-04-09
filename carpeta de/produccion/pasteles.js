document.addEventListener("DOMContentLoaded", () => {

    const btnGuardar = document.getElementById("btn-guardar");
    const inputTipo = document.getElementById("input-tipo");
    const inputLatas = document.getElementById("input-latas");
    const listaCartas = document.getElementById("lista-cartas");

    mostrarLista();

    btnGuardar.addEventListener("click", () => {
        const tipo = inputTipo.value;
        const latas = inputLatas.value;

        if (!tipo || !latas) {
            alert("Por favor completa todos los campos");
            return;
        }

        const registro = {
            tipo: tipo,
            latas: latas,
            fecha: new Date().toLocaleDateString()
        };

        const datos = JSON.parse(localStorage.getItem("pasteles")) || [];
        datos.push(registro);
        localStorage.setItem("pasteles", JSON.stringify(datos));

        inputTipo.value = "";
        inputLatas.value = "";

        mostrarLista();
    });

    function mostrarLista() {
        const datos = JSON.parse(localStorage.getItem("pasteles")) || [];
        listaCartas.innerHTML = "";

        datos.forEach((registro) => {
            const carta = document.createElement("div");
            carta.innerHTML = `
                <p><strong>Tipo:</strong> ${registro.tipo}</p>
                <p><strong>Latas:</strong> ${registro.latas}</p>
                <p><strong>Fecha:</strong> ${registro.fecha}</p>
                <hr>
            `;
            listaCartas.appendChild(carta);
        });
    }
});