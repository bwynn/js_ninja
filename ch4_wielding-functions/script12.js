// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

var elems = {
  // stores the count of elements. if we're going to pretend we're
  // an array, we're going to need someplace to store the number
  // of items that we're storing
  length: 0,

  // implements the method to add elements to our collection.
  // the prototype for array already has a method to do this, so why
  // not use it instead of reinventing the wheel?
  add: function(elem) {
    Array.prototype.push.call(this, elem);
  },
  // implements a mehtod named gather() to find elements
  // by their values and add them to our collection
  gather: function(id) {
    this.add(document.getElementById(id));
  }
};

//tests the gather() and add() methods
elems.gather('first');
assert(elems.length == 1 && elems[0].nodeType,
                    'verify that we have an element in our stash.')

elems.gather('second');
assert(elems.length == 2 && elems[1].nodeType,
                    'Verify the other insertion');
