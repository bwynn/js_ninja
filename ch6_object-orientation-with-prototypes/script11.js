// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// adds a new method to all elements by adding it to the HTMLElement
// prototype
HTMLElement.protoytpe.remove = function() {
  if (this.parentNode) {
    this.parentNode.removeChild(this);  
  }
};

// code that does it the old-fashioned way
var a = document.getElementById('a');
a.parentNode.removeChild(a);

document.getElementById('b').remove();

assert(!document.getElementById('a'), "a is gone");
assert(!document.getElementById('b'), 'b is gone');
