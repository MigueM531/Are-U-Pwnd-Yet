const competencias = [
  {
    id: 1,
    titulo: "Buffer Overflow 101",
    categoria: "Pwn",
    dificultad: "Principiante",
    descripcion: "Aprende a sobrescribir la pila de memoria y modificar el flujo de ejecución de un binario.",
    puntos: 100
  },
  {
    id: 2,
    titulo: "SQL Injection Bypass",
    categoria: "Web",
    dificultad: "Intermedio",
    descripcion: "Evade la autenticación y extrae la flag de la base de datos PostgreSQL.",
    puntos: 250
  }
]

const catalogGrid = document.getElementById('catalog-grid');
const resultsCount = document.getElementById('results-count');
const noResults = document.getElementById('no-results');


function renderizarGrid(lista) {
  if (!catalogGrid) return;

  if (resultsCount) {
    resultsCount.textContent = `Mostrando ${lista.length} de ${competencias.length} competencias disponibles.`;
  }

  if (lista.length === 0) {
    catalogGrid.innerHTML = '';
    if (noResults) noResults.classList.remove('hidden');
    return;
  }

  if (noResults) noResults.classList.add('hidden');

  catalogGrid.innerHTML = lista.map(reto => `
    <article class="ctf-card">
      <div class="card-header">
        <span class="badge badge-accent">${reto.dificultad}</span>
        <span class="card-points">${reto.puntos} PTS</span>
      </div>
      <h2 class="card-title">${reto.titulo}</h2>
      <p class="card-description">${reto.descripcion}</p>
      <div class="card-footer">
        <span class="card-category">#${reto.categoria}</span>
        <a href="reto.html?id=${reto.id}" class="btn btn-primary">Iniciar Reto</a>
      </div>
    </article>
  `).join('');
}

renderizarGrid(competencias)