const celdas = document.querySelectorAll(".celda");
const reiniciar = document.getElementById("reiniciar");
let turno = "X";
let tablero = ["", "", "", "", "", "", "", "", ""];

function comprobarGanador() {
    const combinaciones = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    for (let c of combinaciones) {
        if (tablero[c[0]] && tablero[c[0]] === tablero[c[1]] && tablero[c[1]] === tablero[c[2]]) {
            alert(`Ganó ${tablero[c[0]]}!`);
            return true;
        }
    }
    return false;
}

celdas.forEach(celda => {
    celda.addEventListener("click", () => {
        const index = celda.dataset.index;

        if (tablero[index] === "") {
            tablero[index] = turno;
            celda.textContent = turno;

            if (!comprobarGanador()) {
                turno = turno === "X" ? "O" : "X";
            }
        }
    });
});

reiniciar.addEventListener("click", () => {
    tablero = ["", "", "", "", "", "", "", "", ""];
    turno = "X";
    celdas.forEach(c => c.textContent = "");
});
