// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// declares a recursive chirp function as a property of the ninja
// object. we now need to call the method from within itself
// using the reference to the object's method
var ninja = {
  chirp: function(n) {
    return n > 1 ? ninja.chirp(n-1) + "-chirp" : "chirp";
  }
};

assert(ninja.chirp(3) == "chirp-chirp-chirp",
                      "An object property isnt' too confusing, either.");
