// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

var outerValue = 'ninja';

// declares an empty variable that we'll use later. see how proper
// naming helps us understand what something is used for?
var later;

function outerFunction() {
  // declares a value inside the function. this variable's scope
  // is limited to the function and cannot be accessed from
  // outside the function
  var innerValue = 'samurai';

  // declares an innerfunction within the outer function. note that
  // innerValue is in scope when we declare this function
  function innerFunction() {
    assert(outerValue, "I can see the ninja");
    assert(innerValue, "I can see the samurai");
  }
  // stores a reference to the inner function in the later variable.
  // because later is in the global scope, it will allow us to
  // call the function later
  later = innerFunction();
}

// invokes the outer function, which causes the inner function to be
// declared and its reference assigned to later
outerFunction();

// invokes the inner function through later. we can't invoke it directly
// because it's scope (along with innerValue) is limited to within
// outerFunction()

later();
