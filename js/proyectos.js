///////////////// Modo claro-oscuro
var body = document.querySelector("body");

// Establecer el modo según lo marcado en la Home
function changeMode(){
    if(localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
}
changeMode();
