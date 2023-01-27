// create grid
const leftBoard = document.querySelector("#left-board");

for (let i = 0; i < 100; i++) {
  let cell = document.createElement("div");
  cell.classList.add("grid-cell");
  leftBoard.appendChild(cell);
}

const rightBoard = document.querySelector("#right-board");

for (let i = 0; i < 100; i++) {
  let cell = document.createElement("div");
  cell.classList.add("grid-cell");
  rightBoard.appendChild(cell);
}

let grid = document.querySelector("#right-board");

let cells = grid.getElementsByClassName("grid-cell");

function clicked(event) {
  let cell = event.target;
  cell.style.background = "#FF0000";
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", clicked);
}
