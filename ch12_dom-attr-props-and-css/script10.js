// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

var div = document.createElement("div");
div.setAttribute("style", "opacity:.5");
var OPACITY_SUPPORTED = div.style.opacity === "0.5";

assert(OPACITY_SUPPORTED,
      "Opacity is supported");
