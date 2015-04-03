// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// declares a named inline function and assigns it to variable
var ninja = function myNinja() {
  // tests that two names are equivalent, inside the function
  assert(ninja == myNinja, "this function is named two things at once!");
};

// invokes the function to perform the internal test
ninja();

// tests that the inline function's name isn't available outside the inline
// function
assert(typeof myNinja == 'undefined',
                      "But myNinja isn't defined outside of the function");
