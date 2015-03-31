// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines a constructor that creates a skulk property on whatever object
// is the function context. The method once again returns the function
// context so that we can test it externally
function Ninja() {
  this.skulk = function() { return this; };
}

// creates 2 objects by invoking the constructor with 'new'.
// the newly created objects are referenced by ninja1 and ninja2
var ninja1 = new Ninja();
var ninja2 = new Ninja();

// tests the method of the constructed objects
// each should return it's own constructed object
assert(ninja1.skulk() === ninja1, 'the 1st ninja is skulking');
assert(ninja2.skulk() === ninja2, 'the 2nd ninja is skulking');
