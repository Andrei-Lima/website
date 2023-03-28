let links = [
	["music.html", "Musics"],
	["video.html", "Videos"],
	["terrarium.html", "Terrariums"],
];

let games = [
  ["./img/Games/failure.png", "Economic Failure", "", "Shooter | 2023"],
  ["./img/Games/iso.png", "Gray Infection", "", "Survival | 2023"],
	["./img/Games/armario.png", "Armario", "./files/armario.7z", "Maker | 2023"],
];

//#region links

function li(link, title, id) {
	var l = document.createElement("li");
	//l.style = `margin-left: ${id*25}px;`;
	var a = document.createElement("a");
	a.href = link;
	a.innerHTML = title;
	l.append(a);
	document.getElementById("links").append(l);
}

for (let i = 0; i < links.length; i++) {
	li(links[i][0], links[i][1], i);
}

//#endregion

//#region game carousel

let game_index = 1;

var game_list = document.getElementById("game-carousel");
while(game_list.firstChild) {
  game_list.removeChild(game_list.lastChild);
}

for (let g = 0; g < games.length; g++) {
  var div = document.createElement("div");
  div.onclick = () => {
    window.location = games[g][2];
  }
  div.className = "game-item";
  
  var img = document.createElement("img");
  img.src = games[g][0];
  
  var a = document.createElement("a");
  a.innerHTML = games[g][1];
	a.href = games[g][2];

  var span = document.createElement("span");
  span.innerHTML = games[g][3];

  div.appendChild(img);
  div.appendChild(a);
  div.appendChild(span);

  game_list.appendChild(div);
}



//#endregion
