const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const pixel_size = 16;
const fps = 300;


world = [];
floor_level = 38*pixel_size;

powder_list = [];
powder_list[0, 0] = "Sand";
powder_list[0, 1] = "#FFC57F";

window.onload = () => {
  setInterval(draw, fps);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for(let w = 0; w < canvas.width/pixel_size; w++) {
    ctx.beginPath();
    ctx.moveTo(w*pixel_size, 0);
    ctx.lineTo(w*pixel_size, canvas.height);
    ctx.stroke();
    ctx.moveTo(0, w*pixel_size);
    ctx.lineTo(canvas.width, w*pixel_size);
    ctx.stroke();
  }

  for(let i = 0; i < world.length; i++) {
    var e = world[i];
    ctx.fillStyle = powder_list[e.id, 1];
    ctx.fillRect(e.x, e.y, pixel_size, pixel_size);

    if(e.y < floor_level) {
      e.y += pixel_size;
    }
  }
}

function new_powder(_x, _y, _id) {
  world.push({
    x: _x,
    y: _y,
    id: _id,
  });
}

