// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// named function
function isNimble(){return true;}   // declares a named function
// the function aboce is available in the global scope

assert(typeof window.isNimble === 'function',   //first test asserts the window
        'isNimble() defined');                  // property is established
assert(isNimble.name === 'isNimble',            //second asserts that the
        'isNimble() has a name');               // name property of function is recorded

// anonymous function
var canFly = function() {return true;};         // creates anon func assigned
// to var canFly. the var is a window property and the name of the func
// is empty
assert(typeof window.canFly === 'function',     // test that the var
        'canFly() defined');                    // refreences the anon func
assert(canFly.name === '',                      // and that the name
        'canFly() has no name');                // prop is set to the empty string


// creates an anon function reference by property of window
window.isDeadly = function() {return true;};

assert(typeof window.isDeadly === 'function',   //tests that the prop
        'isDeadly() defined');                  //references the func

// defines an inner function inside the outer function. tests that
// inner() is able to be referenced before and after it's declaration
// and that no global name is created for inner()
function outer() {
  assert(typeof inner === 'function',
        'inner() in scope before declaration');
  function inner() {}
  assert(typeof inner === 'function',
          'inner() in scope after declaration');
  assert(window.inner === undefined,
          'inner() not in global scope');
}

outer();      // tests that outer() can be referenced in the global
assert(window.inner === undefined,    // scope but that inner() cant.
          'inner() still not in global scope');

// variable that we assign a function to has nothing to do with its name;
// thats controlled by what we actually name the function in it's literal
window.wieldsSword = function swingsSword() {return true;};

assert(window.wieldsSword.name === 'swingsSword',
        'wieldSwords real name is swingSword');
