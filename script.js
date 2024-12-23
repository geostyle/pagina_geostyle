/* 
================================================================================
Archivo: script.js
Descripción: Control de menús y submenús responsive para GeoStyle
================================================================================
*/

function toggleMenu(id) {
  var menu = document.getElementById(id);
  var opciones = menu.nextElementSibling;
  var shouldBeVisible = opciones.style.display !== "block";

  // Cierra todos los submenús abiertos
  ocultarTodosLosMenus();

  // Toggle del submenú
  opciones.style.display = shouldBeVisible ? "block" : "none";
}

function ocultarTodosLosMenus() {
  var menus = document.querySelectorAll(".opciones");
  menus.forEach(function (menu) {
    menu.style.display = "none";
  });
}

// Listeners para submenús "Cursos", "Eventos", etc.
document
  .getElementById("desplegarMenu1")
  ?.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    toggleMenu("desplegarMenu1");
  });

document
  .getElementById("desplegarMenu2")
  ?.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    toggleMenu("desplegarMenu2");
  });

// Si existiera un tercer submenú:
document
  .getElementById("desplegarMenu3")
  ?.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    toggleMenu("desplegarMenu3");
  });

// Cierra submenús si hacemos click fuera de ellos
document.body.addEventListener("click", function () {
  ocultarTodosLosMenus();
});

// Ícono de menú en versión móvil
document.querySelector(".menu-icon")?.addEventListener("click", function () {
  var menu = document.querySelector(".navegacion-principal .menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
