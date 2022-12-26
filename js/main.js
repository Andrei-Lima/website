
var alpha = 0.0;

window.onload = () => {
  setInterval(function() {
    if (alpha < 1.0) {
      alpha += 0.05;
      document.getElementById("begin").style = `opacity: ${alpha};`
    }
  }, 50);

}