// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// creates an object form a string containing an object
// literaland tests that not only was the object created,
// but that it has the expected name property
var ninja = eval("({name: 'Ninja'})");
assert(ninja != undefined, "the ninja was created");
assert(ninja.name === "Ninja",
      "and with the expected property!");

// creates a function from a function literal in a string and
// tests that the function was created and returns the expected
// value when called
var fn = eval("(function(){return 'Ninja';})");
assert(typeof fn === 'function',
      "The function was created");
assert(fn() === 'Ninja',
      "And returns expected value");

// tries to create another version of the first test, leaving off
// the parentheses. The first test passes (something is created),
// but the second test fails because the object was not created as expected.
// (poke around in js debugger to see what was created)
var ninja2 = eval("{name: 'Ninja'}");
assert(ninja2 != undefined, "ninja2 was created");
assert(ninja2.name === 'Ninja',
      " and with the expected property");
