// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}
var store = {
  //keeps track of the next available id to be assigned
  nextId: 1,
  // creates an object to serve as a cache in which we'll store functions
  cache: {},
  // adds functions to the cache, but only if they're unique
  add: function(fn) {
    if(!fn.id) {
      fn.id = store.nextId++;
      return !!(store.cache[fn.id] = fn);
    }
  }
};

function ninja() {}

// tests that all works as planned
assert(store.add(ninja), "function was safely added.");
assert(!store.add(ninja), "But it was only added once.");
