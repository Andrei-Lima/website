const list = document.getElementById("social-list");

const social_list = [
	["youtube", "https://youtube.com/@amdrei"],
];

for (let i = 0; i < social_list.length; i++) {
	add_element(social_list[i][0], social_list[i][1]);
}

function add_element(title, link) {
	var li = document.createElement("li");
	var a = document.createElement("a");
	a.innerHTML = title;
	a.href = link;
	li.append(a);
	list.append(li);
}

