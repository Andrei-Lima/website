// Constant variables
const canvas  = document.getElementById("canvas");
const ctx     = canvas.getContext("2d");
const GRID    = canvas.width/3;

// Background color
// Onload
window.onload = () => {
  setInterval(draw, 1);
}

// Tictactow board
board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let turn = 0;
var winner = '';

// Draw board
ctx.beginPath();
ctx.moveTo(canvas.width/1.5, 0);
ctx.lineTo(canvas.width/1.5, canvas.height);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(canvas.width/3, 0);
ctx.lineTo(canvas.width/3, canvas.height);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0, canvas.height/1.5);
ctx.lineTo(canvas.width, canvas.height/1.5);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0, canvas.height/3);
ctx.lineTo(canvas.width, canvas.height/3);
ctx.stroke();


// Mouse click
function getCursorClick(canvas, event) {
  const rect = canvas.getBoundingClientRect()
  const x = Math.floor((event.clientX-rect.left)/(GRID));
  const y = Math.floor((event.clientY-rect.top)/(GRID));
  
  var c = 1;

  if(turn % 2 == true) {
    c = 'X';          // X
  } else {
    c = 'O';          // O
  }
  
  if(board[x][y] == 0 && winner == '') { 
    turn++;
    board[x][y] = c;

    check_winner('X');
    check_winner('O');
  }
}

canvas.addEventListener('mousedown', function(e) {
  getCursorClick(canvas, e);
});

function draw() {
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      ctx.fillStyle = "gray";
      ctx.textAlign = "center";
      
      if(board[i][j] != 0) {
        ctx.font = "48px Verdana";
        ctx.fillText(board[i][j], i*GRID+GRID/2, j*GRID+GRID/1.5);
      }
    }
  }
}

function check_winner(c) {
  for(let i = 0; i < 3; i++) {
    if(board[i][0] == c && board[i][1] == c && board[i][2] == c) {
      winner = c;
      document.getElementById("winner").innerHTML = "The winner is: "+c;
    }

    if(board[0][i] == c && board[1][i] == c && board[2][i] == c) {
      winner = c;
      document.getElementById("winner").innerHTML = "The winner is: "+c;
    }

    if(board[0][0] == c && board[1][1] == c && board[2][2] == c) {
      winner = c;
      document.getElementById("winner").innerHTML = "The winner is: "+c;
    }

    if(board[0][2] == c && board[1][1] == c && board[2][0] == c) {
      winner = c;
      document.getElementById("winner").innerHTML = "The winner is: "+c;
    }
  }
}