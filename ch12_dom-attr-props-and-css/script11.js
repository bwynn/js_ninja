// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function fetchComputedStyle(element, property) {
  if (window.getComputedStyle) {
    // gets the interface
    var computedStyles = window.getComputedStyle(element);

    // fetches the style value
    if (computedStyles) {
      property = property.replace(/([A-Z])/g, '-$1').toLowerCase();
      return computedStyles.getPropertyValue(property);
    }
  } else if (element.currentStyle) {
      // uses proprietary means
      property = property.replace(/-(a-z)/ig,
      function(all, letter) {return letter.toUpperCase(); });
      return element.currentStyle[property];
    }
  }

window.onload = function() {
  var div = document.getElementsByTagName("div")[0];

  assert(true,
        "background-color: " +
        fetchComputedStyle(div, 'background-color'));
  assert(true,
        "display: " +
        fetchComputedStyle(div, 'display'));
  assert(true,
        "font-size: " +
        fetchComputedStyle(div, 'fontSize'));
  assert(true,
        "color: " +
        fetchComputedStyle(div, 'color'));
  assert(true,
        "border-top-color: " +
        fetchComputedStyle(div, 'borderTopColor'));
  assert(true,
        "border-top-width: " +
        fetchComputedStyle(div, 'border-top-width'));
}
