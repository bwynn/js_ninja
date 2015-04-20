// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines a new 'class' with a prototyped length property
function MyArray() {}
MyArray.prototype.length = 0;

// copies selected array functionality
(function() {
  var methods = ['push', 'pop', 'shift', 'unshift',
  'slice', 'splice', 'join'];

  for (var i = 0; i < methods.length; i++) (function(name) {
    MyArray.prototype[ name ] = function() {
      return Array.prototype[ name ].apply(this, arguments);
    };
  })(methods[i]);
})();

// tests the new class
var mine = new MyArray();
mine.push(1, 2, 3);
assert(mine.length == 3,
      "All the items are on our sub-classed array.");
assert(!(mine instanceof Array),
      "We aren't subclassing Array, though.");
