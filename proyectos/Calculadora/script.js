const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        // Animación
        boton.style.transform = "scale(0.92)";
        setTimeout(() => boton.style.transform = "scale(1)", 120);

        // Botón igual
        if (valor === "=") {
            try {
                pantalla.value = eval(pantalla.value);
            } catch {
                pantalla.value = "Error";
            }
        } 
        // Otros botones
        else {
            pantalla.value += valor;
        }
    });
});
