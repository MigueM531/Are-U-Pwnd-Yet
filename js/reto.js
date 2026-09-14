// Catálogo de retos con datos para ID 1  "OSINT: Huellas Digitales"
const retosData = {
  1: {
    titulo: "OSINT: Huellas Digitales",
    categoria: "OSINT / Recon",
    dificultad: "Principiante",
    puntos: 150,
    descripcion: "Un objetivo de interés subió una fotografía a una red social antes de eliminar su cuenta. Descarga la imagen adjunta en el reto, analiza los metadatos EXIF ocultos y extrae el modelo exacto de la cámara y las coordenadas donde se tomó la foto para construir la flag.",
    flagCorrecta: "FLAG{exif_d4t4_l34k_loc4ti0n}"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const container = document.getElementById("reto-app");

  if (id && retosData[id]) {
    const reto = retosData[id];
    container.innerHTML = `
      <main class="page-main challenge-container">
        <section class="challenge-card">
          <div class="challenge-header">
            <span class="challenge-badge category">${reto.categoria}</span>
            <span class="challenge-badge difficulty">${reto.dificultad}</span>
            <span class="challenge-badge points">${reto.puntos} PTS</span>
          </div>

          <h1 class="challenge-title">${reto.titulo}</h1>
          <p class="challenge-description">${reto.descripcion}</p>

          <div class="challenge-actions">
            <button type="button" class="btn btn-primary" onclick="alert('Instancia o recurso iniciado')">
              Iniciar Reto
            </button>
          </div>

          <form class="flag-form" onsubmit="validarFlag(event, '${reto.flagCorrecta}')">
            <div class="input-group">
              <input type="text" id="flag-input" class="form-control" placeholder="FLAG{...}" required autocomplete="off">
              <button type="submit" class="btn-submit">Enviar Flag</button>
            </div>
            <p id="flag-message" class="flag-message"></p>
          </form>
        </section>
      </main>
    `;
  } else {
    container.innerHTML = `
      <main class="page-main">
        <section class="catalog-hero" aria-labelledby="catalog-title">
          <div class="challenge-container">
            <p class="page-description"> 
              Aquí se visualizará la información del reto próximamente.
            </p>
          </div>
        </section>
      </main>
    `;
  }
});

function validarFlag(event, flagCorrecta) {
  event.preventDefault();
  const input = document.getElementById("flag-input").value.trim();
  const msg = document.getElementById("flag-message");

  if (input === flagCorrecta) {
    msg.textContent = "¡Flag correcta! +Puntos asignados.";
    msg.className = "flag-message success";
  } else {
    msg.textContent = "Flag incorrecta. Inténtalo de nuevo.";
    msg.className = "flag-message error";
  }
}