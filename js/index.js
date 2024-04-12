
const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");


class Star {
  constructor(x, y) {
    this.x = x; this.y = y;
    this.hsp = 0;
    this.vsp = 0;
    this.xscale = (Math.random()*2.000)-1.000;
    this.size = 30+Math.floor(Math.random()*30);
  }

  draw(g) {
    let star_img = new Image();
    star_img.src = "./content/img/star-spinning.gif";

    g.drawImage(star_img, this.x, this.y, this.size*this.xscale, this.size);
  }
}


document.getElementById("button1").onclick = () => {
  create_star(2+Math.floor(Math.random()*4));
}

// variables
const gravity = 0.1;
let star_arr = [];


setInterval(update, 15);

function update() {
  let offset = 16;
  canvas.width = window.innerWidth-offset;
  canvas.height = window.innerHeight-offset;

  for (var i=0; i<star_arr.length; i++) {
    var s = star_arr[i];

    s.x += s.hsp;
    s.y += s.vsp;

    s.vsp += gravity;

    s.draw(g);
  }
  
}


function create_star(val) {
  for (var i = 0; i<val; i++) {
    var star = new Star(100, 50);
    star.hsp = (Math.random()*3.00)-1.00;
    star.vsp -= Math.random()*4.00;

    star_arr.push(star);
  }
}
