// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// this property is likely to become depricated in future versions of
// JavaScript, and it's use is forbidden for use in 'strict' mode
var ninja = {
  chirp: function(n) {
    return n > 1 ? arguments.callee(n-1) + "-chirp" : "chirp";
  }
};

assert(ninja.chirp(3) == 'chirp-chirp-chirp',
                      'arguments.callee is the function itself');
