// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function argumentNames(fn) {
  // finds the argument list
  var found = /^[\s\(]*function[^(]*\(\s*([^)]*?)\s*\)/.exec(fn.toString());
  return found && found[1] ?
      found[1].split(/,\s*/) :
      [];
}

// tests the zero-arg case
assert(argumentNames(function(){}).length === 0,
      "works on zero-arg functions.");

// tests the single-arg case
assert(argumentNames(function(x){})[0] === "x",
      "Single argument working.");

var results = argumentNames(function(a,b,c,d,e){});

assert(results[0] == 'a' &&
       results[1] == 'b' &&
       results[2] == 'c' &&
       results[3] == 'd' &&
       results[4] == 'e',
       "Multiple arguments working!");
