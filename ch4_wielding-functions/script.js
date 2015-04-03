// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// establishes and anonymous function as event handler. Theres no
// need to create a named function only to reference it in this location
window.onload = function() {
  assert(true, 'power!');
}

// creates a function to be used as a method for ninja.
// we'll be using the property named shout to invoke the function
// so it doesn't need it's own name
var ninja = {
  shout: function() {
    assert(true, 'ninja');
  }
}

ninja.shout();

// passes a function to the setTimeout() function as a callback to be
// invoked when the timer expires. again, why bother to give it an
// unneeded name?
setTimeout(function() {
  assert(true, 'Forever!');
}, 500);
