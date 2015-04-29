// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function getOpacity(elem) {
  var filter = elem.style.filter;
  // decides what to return
  return filter ?
    filter.indexOf("opacity=") >= 0 ?
    (parseFloat(filter.match(/opacity=([^)])+/)[1]) / 100) + "" :
    "" :
    elem.style.opacity;
}

window.onload = function() {
  assert(getOpacity(document.getElementById("opacity")) == "0.5",
  "The opacity of the element has been obtained");
}
