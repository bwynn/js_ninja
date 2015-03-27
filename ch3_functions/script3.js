// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// define a function that returns its function context. This will allow us
// to examine the function contenxt of a function from outside of it
// after it has been invoked
function creep() {return this;}

// tests invocation as a function and verifies that function context
// was the window object (the global scope)
assert(creep() === window,
        'Creeping in the window');

// creates a reference to the same function in variable sneak
var sneak = creep;

// invokes the function using the sneak variable. even though we've used
// a variable, the function is still invoked as a function, and
// the function context is window
assert(sneak() === window,
        'Sneaking in the window');

// create an object in ninja1 and creats a skulk property that references
// the original creep() function
var ninja1 = {
  skulk: creep
}

// invokes the function through skulk property, thus invoking
// it as a method of ninja1. The function context is no longer
// window but is ninja1. thats object orientation!
assert(ninja1.skulk() === ninja1,
        'The 1st ninja is skulking');

// creates another object, ninja2, that also has a skulk property
// referencing creep()
var ninja2 = {
  skulk: creep
}

// invokes the function as a method of ninja2, and behold, the function
// context is ninja2
assert(ninja2.skulk() === ninja2,
        'The 2nd ninja is skulking');
