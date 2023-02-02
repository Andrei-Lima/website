const NAVBAR = document.getElementById("navbar");
const GAME_PAGE = document.getElementById("game-page");
let navbar_list = [
	"Home",
	"Map",
];

let page_id = 0;

function select_page(n) {
	page_id = n;
	document.getElementById("page-id").innerHTML = navbar_list[page_id];
}

for (let i = 0; i < navbar_list.length; i++) {
	var span = document.createElement("span");
	span.innerHTML = navbar_list[i];
	span.setAttribute("onclick", `select_page(${i})`);
	NAVBAR.append(span);
}

console.log("Loaded.");

