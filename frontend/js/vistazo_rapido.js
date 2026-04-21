const API_PRODUCCION = "http://localhost:8080/api/Produccion";

async function cargarVistazoPanes() {
  const datos = await fetch(API_PRODUCCION).then(r => r.json());

  const panes     = datos.filter(r => r.producto?.tipo?.tipo === "Pan");
  const bocaditos = datos.filter(r => r.producto?.tipo?.tipo === "Bocadito");
  const tortas    = datos.filter(r => r.producto?.tipo?.tipo === "Torta");

  const totalPanes     = panes.reduce((s, r) => s + r.cantidad, 0);
  const totalBocaditos = bocaditos.reduce((s, r) => s + r.cantidad, 0);
  const totalTortas    = tortas.reduce((s, r) => s + r.cantidad, 0);

  document.getElementById("vr-total-panes").textContent     = totalPanes;
  document.getElementById("vr-total-bocaditos").textContent = totalBocaditos;
  document.getElementById("vr-total-tortas").textContent    = totalTortas;
  document.getElementById("vr-total-registros").textContent = datos.length;
}

document.addEventListener("DOMContentLoaded", cargarVistazoPanes);