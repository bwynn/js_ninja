// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

var ninja = {
  chirp: function(n) {
    return n > 1 ? this.chirp(n-1) + "-chirp" : "chirp";
  }
};

// creates a chirp() method on samurai by referencing the existing method
// of same name on ninja. Why write the code twice hen we already have
// an implementation?
var samurai = {
  chirp: ninja.chirp
}

// redefines ninja such that it has no properties.
// this means that it's chirp function goes away!
ninja = {};

// tests if things still work. Hint: they dont!
try {
  assert(samurai.chirp(3) == 'chirp-chirp-chirp',
                          'Is this going to work?');
} catch(e) {
  assert(false, "Uh, this isn't good! Where'd ninja.chirp go?");
}
