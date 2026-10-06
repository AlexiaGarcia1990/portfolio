const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        if (valor === "=") {
            pantalla.value = eval(pantalla.value);
        } else {
            pantalla.value += valor;
        }
    });
});
