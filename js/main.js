///////////////// BOTÓN PARA SUBIR A LA PARTE SUPERIOR
var btnUp = document.getElementById("btn-up");

// Comportamiento cuando se hace scroll
window.onscroll = function(){
	scrollFunction();
}

// Aparece el botón cuando el scroll supera la medida indicada
function scrollFunction(){
	if(document.body.scrollTop > 990 || document.documentElement.scrollTop > 990){
		btnUp.style.display = "block";
	} else {
		btnUp.style.display = "none";
	}
}

// Llevar a la parte superior de la página
function buttonUp(){
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
}

///////////////// MODO CLARO-OSCURO
var switchBtnMov = document.querySelector(".switchBtnMov");
var switchBtnDes = document.querySelector(".switchBtnDes");
var body = document.querySelector("body");
var iconMoonDes = document.querySelector(".icon-moon-des");
var iconMoonMov = document.querySelector(".icon-moon-mov");

// Añadir o quitar clase 'dark'
function switchMode(){
	body.classList.toggle("dark");
	// Cambiar el icono según el modo
	if (body.classList.contains("dark")) {
        iconMoonDes.src = "./img/icons/sun-des.svg";
		iconMoonMov.src = "./img/icons/sun-mov.svg";
    } else {
        iconMoonDes.src = "./img/icons/moon.svg";
		iconMoonMov.src = "./img/icons/moon.svg";
    }
	// Guardar el modo en localstorage
	if(document.body.classList.contains("dark")){
		localStorage.setItem("dark-mode", "true");
	} else {
		localStorage.setItem("dark-mode", "false");
	}
}

// Establecer el modo según lo guardado en localstorage
if(localStorage.getItem("dark-mode") === "true") {
	body.classList.add("dark");
	iconMoonDes.src = "./img/icons/sun-des.svg";
	iconMoonMov.src = "./img/icons/sun-mov.svg";
} else {
	body.classList.remove("dark");
	iconMoonDes.src = "./img/icons/moon.svg";
	iconMoonMov.src = "./img/icons/moon.svg";
}

// Función manejadora del evento click, se ejecuta el añadir o quitar la clase 'dark'
function handleBtn() {
    switchMode();
}

// Comportamiento al hacer click en el botón, tanto versión mobile como desktop
switchBtnMov.addEventListener("click", handleBtn);
switchBtnDes.addEventListener("click", handleBtn);

///////////////// MENÚ HAMBURGUESA
var navAfter = document.getElementById("menu-mobile-after");

// Aparece el menú
function openNav(){
	navAfter.style.display = "block";
	navAfter.style.height = "100%";
}

// Desaparece el menú
function closeNav(){
	navAfter.style.display = "none";
	navAfter.style.height = "0%";
}

///////////////// TABS DE EXPERIENCIA Y EDUCACIÓN
var exp = document.getElementById("exp");
var ed = document.getElementById("ed");
var expIcon = document.getElementById("exp-icon");
var edIcon = document.getElementById("ed-icon");

// Tab de educación activo y cambio de iconos
function openEd(){
	ed.style.display = "block";
	exp.style.display = "none";
	expIcon.src = "img/icons/work-inactive.svg";
	edIcon.src = "img/icons/education-active.svg";
}

// Tab de experiencia activo y cambio de iconos
function openExp(){
	exp.style.display = "block";
	ed.style.display = "none";
	expIcon.src = "img/icons/work-active.svg";
	edIcon.src = "img/icons/education-inactive.svg";
}

///////////////// Carousel de proyectos
var index = 1;

// Mostrar la siguiente imagen del proyecto
function nextProject(n){
	showProject(index += n);
}

// Mostrar imágenes del proyecto en función de la posición
function showProject(n){
	var i;
	var project = document.getElementsByClassName("project");

	if(n > project.length){
		index = 1;
	}

	if(n < 1){
		index = project.length;
	}

	for(i = 0; i < project.length; i++){
		project[i].style.display = "none";
	}

	project[index-1].style.display = "block";
	project[index].style.display = "block";
}

// Ejecutar el carousel en función del dispositivo
function executeCode(){
	if(screen.width >= 1200){
		showProject(index);
	} else {
		
	}
}
executeCode();

///////////////// Footer
var yearJs = (new Date).getFullYear();
var yearHtml = document.querySelector(".footer-text");
// Establecer año del footer dinámico
yearHtml.innerHTML = `&copy; Sonia Calderón ${yearJs}`;