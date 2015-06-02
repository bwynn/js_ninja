// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// creates a private scope
(function() {
  // defines target properties
  var PROPERTIES = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  };

  // creates the new function
  window.getDimensions = function(element) {
    // remembers settings
    var previous = {};
    for (var key in PROPERTIES) {
      previous[key] = element.style[key];
      element.style[key] = PROPERTIES[key];
    }

    // fetches dimensions
    var result = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };

    for (key in PROPERTIES) {
      element.style[key] = previous[key];
    }
    return result;
  };

})();

window.onload = function() {
  setTimeout(function() {
    var withPole = document.getElementById("withPole"),
        withShuriken = document.getElementById("withShuriken");

    // tests visible element
    assert(withPole.offsetWidth == 41,
          "Pole image width fetched; actual: " +
          withPole.offsetWidth + ", expected: 41");

    assert(withPole.offsetHeight == 48,
          "Pole image height fetched: actual: " +
          withPole.offsetHeight + ", expected 48");

    // tests hidden element
    assert(withShuriken.offsetWidth == 36,
          "Shuriken image width fetched; actual: " +
          withShuriken.offsetWidth + ", expected: 36");
    assert(withShuriken.offsetHeight == 48,
          "Shuriken image height fetched: actual: " +
          withShuriken.offsetHeight + ", expected: 48");

    // uses new function
    var dimensions = getDimensions(withShuriken);

    //retests hidden element
    assert(dimensions.width == 36,
          "Shuriken image width fetched; actual: " +
          withShuriken.offsetWidth + ", expected: 36");
    assert(dimensions.height == 48,
          "Shuriken image height fetched: actual: " +
          withShuriken.offsetHeight + ", expected: 48");
  }, 3000);
}
