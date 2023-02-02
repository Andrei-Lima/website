const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");
const WIDTH = 800;
const HEIGHT = 600;
const CELL = 16;

CANVAS.width = WIDTH;
CANVAS.height = HEIGHT;

let board = [];
let rows = Math.round(WIDTH/CELL);
let columns = Math.round(HEIGHT/CELL);

window.onload = () => {
	setInterval(update, 100);
}

function update() {
	rect(16, 16, CELL, "white");
}

function rect(x, y, s, c) {
	CTX.fillStyle = c;
	CTX.fillRect(x, y, s, s);
}
