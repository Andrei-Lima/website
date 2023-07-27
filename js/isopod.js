const CANVAS = document.getElementById("canvas");
const INPUT = document.getElementById("input");
const ctx = CANVAS.getContext("2d");

const commands = [
  ["walk_left", function(){monolith.x -= 16;}],
  ["walk_right", function(){monolith.x += 16;}],
];

let monolith = {
  x: 100,
  y: 150,
}

window.onload = () => {
  setInterval(function(){

    ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);

    ctx.fillStyle = "white";
    ctx.fillRect(monolith.x, monolith.y, 16, 16);

  }, 300);

  document.addEventListener("keydown", keyboard);
}

function keyboard(e) {
  switch(e.keyCode) {
    case 13:
      for (let i = 0; i < commands.length; i++) {
        if (INPUT.value == commands[i][0]) {
          commands[i][1]();
          break;
        }
      }
      INPUT.value = "";
      break;
  }
} 