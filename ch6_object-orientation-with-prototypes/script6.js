// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function Ninja() {};

var ninja = new Ninja();

// tests the type of ninja using typeof. that tells us its an object
// but not much else
assert(typeof ninja == 'object',
        'The type of the instance is object');

// tests the type of ninja using instanceof. this gives us more
// information -- that it was constructed from Ninja
assert(ninja instanceof Ninja,
        'instanceof identifies the constructor');

// tests the type of ninja using the constructor reference. this gives
// us an actual reference to the constructor function.        
assert(ninja.constructor == Ninja,
        'The ninja object was created by the Ninja function');
