// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines function
function juggle() {
  var result = 0;
  for (var n = 0; n < arguments.length; n++) {    // sums up arguments
    result += arguments[n];
  }
  this.result = result;                           // stores result on context
}

var ninja1 = {};           // sets up test objects
var ninja2 = {};

// applies function
juggle.apply(ninja1, [1,2,3,4]);
juggle.call(ninja2,5,6,7,8);

assert(ninja1.result === 10, "juggled via apply");
assert(ninja2.result === 26, 'juggled via call');
