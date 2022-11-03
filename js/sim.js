const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const frame_rate = 300;
const grid = 16;

window.onload = () => {
	setInterval(draw, frame_rate);
}

board = [];

function new_entity(_id, _x, _y, _color) {
	board.push({
		id: _id,
		x: _x,
		y: _y,
		color: _color,
	});
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);	
	for(let i = 0; i < canvas.width/grid; i++) {
		ctx.beginPath();
		ctx.moveTo(0, i*grid);
		ctx.lineTo(canvas.width, i*grid);
		
		ctx.moveTo(i*grid, 0);
		ctx.lineTo(i*grid, canvas.height);
		ctx.stroke();
	}

	for(let i = 0; i < board.length; i++) {
		ctx.fillStyle = board[i].color; ctx.fillRect(board[i].x*grid, board[i].y*grid, grid, grid);
	}
}

new_entity(0, 2, 5, "blue");

