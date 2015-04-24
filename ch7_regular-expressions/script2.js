// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// creates a regex via a literal
var re1 = /test/i;

// creates a regex via the constructor
var re2 = new RegExp("test", "i");

assert(re1.toString() == "/test/i",
      "Verify the contents of the expression");

assert(re1.test("TesT"), "Yes, it's case sensitive");
assert(re2.test("TesT"), "This one is too!");
assert(re1.toString() == re2.toString(),
      "The regular expressions are equal");
assert(re1 != re2, "But they are different objects");
