// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// set up an inherited property
Object.prototype.ronin = "ronin";

var object = { ninja: 'value' };
object.samurai = 'samurai';

assert(object.hasOwnProperty('ronin'), 'ronin is a property.');
assert(object.hasOwnProperty('ninja'), 'ninja is a property.');
assert(object.hasOwnProperty('samurai'), 'samurai is a property.');
