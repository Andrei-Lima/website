const canvas 		= document.getElementById("canv");
const ctx 			= canvas.getContext("2d");
const CELL			= 16;


let world = [];

class Entity {
	constructor(x, y, id) {
		this.x = x*CELL;
		this.y = y*CELL;
		this.id = id;
	}
}

var entity = new Entity(5, 5, 0);
world.push(entity);


window.onload = () => {
	setInterval(draw, 100);
}

function draw() {
	for(var i = 0; i < world.length; i++) {
		ctx.fillRect(world[i].x, world[i].y, CELL, CELL);
	}
}

