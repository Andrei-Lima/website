
const ART_DIV = document.getElementById("art");

class Art {
  constructor(src, title){
    this.src = "./content/img/art/"+src;
    this.title = title;
  }
}

let artList = [];



artList.push(new Art("horrific.png", "Horrific"));
artList.push(new Art("1.jpg", "reptile master"));


for (let i=0; i<artList.length; i++) {
  createArt(artList[i].src, artList[i].title);
}

function createArt(src, title) {
  var div1 = document.createElement("div");
  div1.classList = "art";
  var div2 = document.createElement("div");
  div2.classList = "image";
  var img = document.createElement("img");
  img.src = src;
  var p = document.createElement("p");
  p.innerHTML = title;
  
  div2.append(img);
  div1.append(div2);
  div1.append(p);

  ART_DIV.append(div1);

}



