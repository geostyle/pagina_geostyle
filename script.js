function toggleMenu(id) {
    var menu = document.getElementById(id);
    var opciones = menu.nextElementSibling;
    var shouldBeVisible = opciones.style.display !== "block";
    ocultarTodosLosMenus();
    opciones.style.display = shouldBeVisible ? "block" : "none";
}

function ocultarTodosLosMenus() {
    var menus = document.querySelectorAll(".opciones");
    menus.forEach(function (menu) {
        menu.style.display = "none";
    });
}

document.getElementById("desplegarMenu1").addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    toggleMenu("desplegarMenu1");
});

document.getElementById("desplegarMenu2").addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    toggleMenu("desplegarMenu2");
});

document.getElementById("desplegarMenu3").addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    toggleMenu("desplegarMenu3");
});

document.body.addEventListener("click", function () {
    ocultarTodosLosMenus();
});
