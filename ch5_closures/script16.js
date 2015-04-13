// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

var div = document.getElementsByTagName('div');

for (var i = 0; i < div.length; i++) (function(n) {
  div[n].addEventListener("click", function() {
    alert("div # " + n + " was clicked");
  }, false);
})(i);
