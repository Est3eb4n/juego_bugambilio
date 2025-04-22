// Variables globales
let aldeanoCount = 0;
const MAX_ALDEANOS = 5;

// Mostrar/ocultar menú
document.getElementById("btnVentanaOpcionesCasa").addEventListener("click", (event) => {
    event.preventDefault();
    const contenedorMenu = document.querySelector('.contenedorMenu');
    
    if (contenedorMenu.style.display === "none" || !contenedorMenu.style.display) {
        contenedorMenu.innerHTML = `
            <div class="contMenu">
                <h2>Casa Comunal</h2>
                <button class="btnNombre">Crear Aldeano</button>
                <p id="contadorAldeanos">Aldeanos: ${aldeanoCount}/${MAX_ALDEANOS}</p>
            </div>
        `;
        contenedorMenu.style.display = "block";
        
        // Añadir evento al botón de crear aldeano
        document.querySelector('.btnNombre').addEventListener('click', crearAldeano);
    } else {
        contenedorMenu.style.display = "none";
    }
});

// Función para crear aldeanos
// Función para crear aldeanos (versión corregida)
function crearAldeano() {
    if (aldeanoCount >= MAX_ALDEANOS) {
        alert("¡Has alcanzado el máximo de aldeanos!");
        return;
    }
    
    const container = document.getElementById('aldeanosContainer');
    if (!container) {
        console.error("No se encontró el contenedor de aldeanos");
        return;
    }
    
    aldeanoCount++;
    document.getElementById("contadorAldeanos").textContent = `Aldeanos: ${aldeanoCount}/${MAX_ALDEANOS}`;
    
    const aldeano = document.createElement('div');
    aldeano.className = 'aldeano';
    aldeano.dataset.id = aldeanoCount;
    
    // Posición aleatoria dentro del contenedor (ajustada al tamaño del contenedor)
    const posX = Math.floor(Math.random() * (container.offsetWidth - 60));
    const posY = Math.floor(Math.random() * (container.offsetHeight - 80));
    aldeano.style.left = `${posX}px`;
    aldeano.style.top = `${posY}px`;
    
    // Evento para eliminar aldeano
    aldeano.addEventListener('click', function(e) {
        e.stopPropagation();
        if (confirm("¿Eliminar este aldeano?")) {
            this.remove();
            aldeanoCount--;
            document.querySelector('#contadorAldeanos').textContent = `Aldeanos: ${aldeanoCount}/${MAX_ALDEANOS}`;
        }
    });
    
    container.appendChild(aldeano);
    
    // Animación mejorada
    aldeano.style.opacity = '0';
    aldeano.style.transform = 'scale(0.5)';
    setTimeout(() => {
        aldeano.style.transition = 'all 0.3s ease-out';
        aldeano.style.opacity = '1';
        aldeano.style.transform = 'scale(1)';
    }, 10);
}
