let links = [
	["video.html", "Videos"],
	["music.html", "Musics"],
	["terrarium.html", "Terrariums"],
];

function li(link, title, id) {
	var l = document.createElement("li");
	l.style = `margin-left: ${id*25}px;`;
	var a = document.createElement("a");
	a.href = link;
	a.innerHTML = title;
	l.append(a);
	document.getElementById("links").append(l);
}

for (let i = 0; i < links.length; i++) {
	li(links[i][0], links[i][1], i);
}
