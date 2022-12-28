
var alpha = 0.0;

window.onload = () => {
  setInterval(function() {
    if (alpha < 1.0) {
      alpha += 0.02;
      document.getElementById("begin").style = `opacity: ${alpha};`;
      document.getElementById("dark").style = `background: linear-gradient(45deg, var(--background-color-dark) ${alpha*10}%, #142a41 ${((alpha+.5)*150)}%);`;
    }
  }, 50);

}