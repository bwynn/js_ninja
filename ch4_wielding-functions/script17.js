// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// stores the previous function because we may need to call it if the
// passed function doesnt have a matching number of arguments
function addMethod(object, name, fn) {
  var old = object[name];
  // creates a new anonymous function that becomes the method
  object[name] = function() {
    // invokes the passed function if it's parameter and arguments
    // count match
    if (fn.length == arguments.length)
      return fn.apply(this, arguments)
    // invokes the previous function if passed function isn't a match
    else if (typeof old == 'function')
    return old.apply(this, arguments);
  };
}

// declare an object to serve as the base, preloaded with some test data
var ninjas = {
  values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
};

// binds a no-argument method to the base object
addMethod(ninjas, "find", function() {
  return this.values;
});

// binds a single-argument method to the base object
addMethod(ninjas, "find", function(name) {
  var ret = [];
  for (var i = 0; i < this.values.length; i++)
    if (this.values[i].indexOf(name) == 0)
    ret.push(this.values[i]);
    return ret;
});

// binds a dual-argument method to the base object
addMethod(ninjas, "find", function(first, last) {
  var ret = [];
  for (var i = 0; i < this.values.length; i++)
    if (this.values[i] == (first + ' ' + last))
      ret.push(this.values[i]);
      return ret;
});

// tests the bound methods
assert(ninjas.find().length == 3,
      "Found all ninjas");
assert(ninjas.find("Sam").length == 1,
      "Found ninja by first name");
assert(ninjas.find("Dean", "Edwards").length == 1,
      "Found ninjas by first and last name");
assert(ninjas.find("Alex", "Russell", "Jr") == null,
      "Found nothing");
