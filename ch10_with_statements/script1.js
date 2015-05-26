// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines a top-level variable
var use = "other";

// creates an object
var katana = {
  isSharp: true,
  use: function() {
    this.isSharp = !this.isSharp;
  }
};

with (katana) {
  assert(use !== "other" && typeof use == "function",
        "use is a function from the katana object.");
  assert(this !== katana,
        "context isn't changed; keeps its original value");
}
// tests outside the scope
assert(use === "other",
      "outside the with use is unaffected.");
assert(typeof isSharp == "undefined",
      "outside the with the properties don't exist.");
