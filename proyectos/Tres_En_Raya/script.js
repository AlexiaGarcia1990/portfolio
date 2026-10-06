const tablero = document.getElementById("tablero");
const mensaje = document.getElementById("mensaje");
const reiniciarBtn = document.getElementById("reiniciar");

let turno = "X";
let casillas = ["", "", "", "", "", "", "", "", ""];
let juegoActivo = true;

function crearTablero() {
    tablero.innerHTML = "";
    casillas.forEach((valor, i) => {
        const div = document.createElement("div");
        div.classList.add("casilla");
        div.dataset.index = i;
        div.textContent = valor;
        div.addEventListener("click", marcar);
        tablero.appendChild(div);
    });
}

function marcar(e) {
    const index = e.target.dataset.index;

    if (!juegoActivo || casillas[index] !== "") return;

    casillas[index] = turno;
    e.target.textContent = turno;

    if (verificarGanador()) {
        mensaje.textContent = `¡${turno} ha ganado!`;
        juegoActivo = false;
        return;
    }

    if (!casillas.includes("")) {
        mensaje.textContent = "¡Empate!";
        juegoActivo = false;
        return;
    }

    turno = turno === "X" ? "O" : "X";
    mensaje.textContent = `Turno de ${turno}`;
}

function verificarGanador() {
    const combinaciones = [
        [0,1,2], [3,4,5], [6,7,8], // filas
        [0,3,6], [1,4,7], [2,5,8], // columnas
        [0,4,8], [2,4,6]           // diagonales
    ];

    return combinaciones.some(([a,b,c]) =>
        casillas[a] &&
        casillas[a] === casillas[b] &&
        casillas[a] === casillas[c]
    );
}

reiniciarBtn.addEventListener("click", () => {
    casillas = ["", "", "", "", "", "", "", "", ""];
    turno = "X";
    juegoActivo = true;
    mensaje.textContent = "Turno de X";
    crearTablero();
});

crearTablero();
mensaje.textContent = "Turno de X";
