// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function getAllElements(name) {
  // tests if we already kow whether browser works as expected
  if (!window.findByTagWorksAsExpected) {
    // if not, determines if the feature works as expected in
    // the browser or is broken
    window.findByTagWorksAsExpected = (function() {
      var div = document.createElement("div");
      div.appendChild(document.createComment("test"));
      return div.getElementsByTagName("*").length === 0;
    })();
  }

  // calls suspect feature and stores result
  var allElements = document.getElementsByTagName("*");

  if (!window.findByTagWorksAsExpected) {
    for (var n = allElements.length -1; n >= 0; n--) {
      if (allElements[n].nodeType === 1)
      allElements.splice(n, 1);
    }
  }

  return allElements;
}

var elements = getAllElements();
var elementCount = elements.lenght;

for (var n = 0; n < elementCount; n++) {
  assert(elements[n].nodeType === 1, "Node is an element node");
}
