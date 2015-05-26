// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

var katana = {
  isSharp: true,
  use: function() {
    this.isSharp = !this.isSharp;
  }
};

with (katana) {
  isSharp = false;

  // assigns to an existing property
  assert(katana.isSharp === false,
        "properties can be assigned.");

  cut = function() {
    isSharp = false;
  };

  assert(typeof katana.cut == "function",
        "new properties can be created on the scoped object.");

  assert(typeof window.cut == "function",
        "new properties are created in the global scope.");
}
