
const mapHTML = document.getElementById("maps");

const map_list = [
  ["./maps/default.txt", "Default"],
];


function map(n) {
  var a = document.createElement("a");
  a.href = map_list[n][0];
  a.innerHTML = map_list[n][1];
  a.download = true;

  mapHTML.append(a);
}

for (var i = 0; i < map_list.length; i++) {
  map(i);
}