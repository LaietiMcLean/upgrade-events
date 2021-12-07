window.onload = () => {
//Iteración 1
//1.1
let button1 = document.getElementById("btnToClick");
button1.innerText = "Click me!"
button1.addEventListener("click", () => {
    console.log("Has hecho click"); //Se comprueba -> al hacer click se imprime en consola el mensaje
})

let eventFocus = document.getElementsByClassName("focus")[0];
eventFocus.addEventListener("focus", () => {
    console.log("Has seleccionado el elemento Focus!"); //Se comprueba -> al seleccionar el input con class focus se imprime texto en consola
})

let eventInput = document.getElementsByClassName("value")[0];
eventInput.addEventListener("input", () => {
    console.log("Has ejecutado el evento input"); ////Se comprueba -> al escribir en la casilla con class input se imprime el texto en consola
})

}