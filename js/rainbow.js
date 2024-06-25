
let rainbowOffset = 0;

setInterval(update, 15);

function update() {
  var elements = document.getElementsByClassName("rainbowText");
  for (let i = 0; i < elements.length; i++) {
    generateRainbowText(elements[i]);
  }
  rainbowOffset -= 0.031;
}


function generateRainbowText(element) {
  var text = element.innerText;
  element.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    let charElem = document.createElement("span");
    charElem.style = "font-family: 'Comic Sans MS', sans-serif;";
    charElem.style.color = "hsl(" + (360 * (i+rainbowOffset) / text.length) + ",80%,50%)";
    charElem.innerHTML = text[i];
    element.appendChild(charElem);
  }
}

