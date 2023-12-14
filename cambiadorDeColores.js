
const colors = [
    {
        nombre: "blue",
        codigoColor: "#cddafd"
    },
    {
        nombre: "pink",
        codigoColor: "#fad2e1"
    },
    {
        nombre: "gray",
        codigoColor: "#eae4e9"
    },
    {
        nombre: "yellow",
        codigoColor: "#fefae0"
    },
    {
        nombre: "blue",
        codigoColor: "#cddafd"
    },
    {
        nombre: "green",
        codigoColor: "#e2ece9"
    },
    {
        nombre: "gold",
        codigoColor: "#faedcb"
    },
    {
        nombre: "mint",
        codigoColor: "#d0f4de"
    },
]

let numAnterior = 0;

const controlClick = () => {
    const idButton = document.getElementById("containerButton");
    idButton.addEventListener("click", () => { cambiarColor() }); //meter funcion dentro de funcion flecha
}

function cambiarColor() {
    const arryPosition = Math.floor(Math.random() * colors.length);
    if (numAnterior === arryPosition) {
        cambiarColor();
    }
    else {
        numAnterior = arryPosition; //como la variable numAnterior esta definida fuera es decir es global, no tengo qu eponer let porque la variable ya esta definida.
        const idContainer = document.getElementById("container");
        idContainer.style.backgroundColor = colors[arryPosition].codigoColor;
        changeName(arryPosition); //con esto llamo a la función de abajo q sino no se ejecuta
    }
}

const changeName = (position) => {
    const colorName = document.getElementById("colorName");
    colorName.innerHTML = colors[position].nombre;
    colorName.style.color = colors[position].codigoColor;
}



controlClick();