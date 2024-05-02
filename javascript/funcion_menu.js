const container_contenido = document.getElementById('container_contenido');

//Crear variables para cada uno de los items del menu
const item_inicio = document.getElementById('item_inicio');
const item_inventario = document.getElementById('item_inventario');
const item_prestamos = document.getElementById('item_prestamos');
const item_gestionar = document.getElementById('item_gestionar');
const item_guia_uso = document.getElementById('item_guia_uso');


//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_inicio.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('inicio.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente


item_inventario.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('inventario.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

item_prestamos.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('prestamos.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

item_gestionar.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('gestionar.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

item_guia_uso.addEventListener('click', (event) => {
  event.preventDefault()

  fetch('guiadeuso.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
});

