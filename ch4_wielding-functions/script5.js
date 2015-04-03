// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// declare a named inline function
var ninja = {
  chirp: function signal(n) {
    return n > 1 ? signal(n-1) + '-chirp' : 'chirp';
  }
};

// tests that it works as expected
assert(ninja.chirp(3) == 'chirp-chirp-chirp',
                        'works as we would expect it to!');

// creates a new object
var samurai = {
  chirp: ninja.chirp
};

// wipes out the ninja object just like in the previous example
ninja = {};

// tests that it still works, and it does!
assert(samurai.chirp(3) == 'chirp-chirp-chirp',
                          "the method correctly calls itself.")
