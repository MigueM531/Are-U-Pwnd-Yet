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
  },
  {
    id: 3,
    titulo: "OSINT: Huellas Digitales",
    categoria: "OSINT",
    dificultad: "Principiante",
    descripcion: "Rastrea la presencia de un perfil objetivo mediante metadatos e imágenes públicas.",
    puntos: 150
  },
  {
    id: 4,
    titulo: "Kernel Exploitation LPE",
    categoria: "Pwn",
    dificultad: "Avanzado",
    descripcion: "Escalación local de privilegios aprovechando vulnerabilidades en el Kernel de Linux.",
    puntos: 500
  },
  {
    id: 5,
    titulo: "JWT Key Confusion",
    categoria: "Web",
    dificultad: "Intermedio",
    descripcion: "Manipula la firma de tokens JSON Web para suplantar identidades de administrador.",
    puntos: 300
  },
  {
    id: 6,
    titulo: "Reverse Engineering: ELF",
    categoria: "Reversing",
    dificultad: "Avanzado",
    descripcion: "Descompila el binario con Ghidra para encontrar el algoritmo de generación de llaves.",
    puntos: 450
  }
];

const catalogGrid = document.getElementById('catalog-grid');
const resultsCount = document.getElementById('results-count');
const noResults = document.getElementById('no-results');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');

let busquedaActual = '';
let dificultadActual = 'all';


function aplicarFiltros() {
  const resultados = competencias.filter(reto => {
    const coincideTexto = reto.titulo.toLowerCase().includes(busquedaActual) ||
                          reto.descripcion.toLowerCase().includes(busquedaActual) ||
                          reto.categoria.toLowerCase().includes(busquedaActual);

    const coincideDificultad = dificultadActual === 'all' || reto.dificultad === dificultadActual;

    return coincideTexto && coincideDificultad;
  });

  renderizarGrid(resultados);
}


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


if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    busquedaActual = e.target.value.toLowerCase().trim();
    aplicarFiltros();
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    dificultadActual = button.dataset.filter;
    aplicarFiltros();
  });
});

document.addEventListener('DOMContentLoaded', aplicarFiltros);