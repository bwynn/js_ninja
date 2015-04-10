// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

var outerValue = 'ninja';
var later;

function outerFunction() {
  var innerValue = 'samurai';

  // added a parameter to the inner function
  function innerFunction(paramValue) {
    // tests if we can see the parameter (duh!) and also tests
    // to see if the closure includes variables that are declared
    // after the function is declared. what do you think will happen?
    assert(outerValue, "Inner can see the ninja.");
    assert(innerValue, "Inner can see the samurai.");
    assert(paramValue, "Inner can see the wakizashi.");
    assert(tooLate, "Inner can see the ronin");
  }

  later = innerFunction;
}

// looks for a later value in the same scope. will this fail as
// asserted? or pass?
assert(!tooLate, "Outer can't see the ronin.");

// declares a value after the inner function declaration
var tooLate = 'ronin';

outerFunction();
later('wakizashi');
