const id = document.getElementById("terrarium-list");

let list = [];

add_list("./img/terra1.jpeg", "Micron", "idk, it looks nice", "200");
add_list("./img/aquarium1.jpeg", "undefined", "That's the biggest terrarium i have made.", "350");
add_list("./img/terra2.jpeg", "", "", "450");


function add_list(img, ttl, desc, w) {
	list.push({
		image: img,
		title: ttl,
		description: desc,
		width: w,
	});
}

function element(image, title, description, w) {
	var div1 = document.createElement("div");
	div1.id = "terra";

	var div2 = document.createElement("div");
	div2.id = "info";
	
	var img = document.createElement("img");
	img.src = image;
	img.width = w;

	var ttl = document.createElement("h1");
	ttl.innerHTML = title;

	var desc = document.createElement("p");
	desc.innerHTML = description;

	div1.append(img);
	div2.append(ttl);
	div2.append(desc);
	div1.append(div2);
	id.append(div1);
}


for (let i = 0; i < list.length; i++) {
	element(list[i].image, list[i].title, list[i].description, list[i].width);
}

