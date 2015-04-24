// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function isThisAZipCode(candidate) {
  // short circuits obvious bogus candidates
  if (typeof candidate !== 'string' ||
    candidate.length != 10) return false;
  for (var n = 0; n < candidate.length; n++) {
    var c = candidate[n];
    // performs test based upon character index
    switch (n) {
      case 0: case 1: case 2: case 3: case 4:
      case 6: case 7: case 8: case 9:
        if(c < '0' || c > '9') return false;
        break;
      case 5:
        if(c != '-') return false;
        break;
    }
  }
  return true;
}

// which is the same as
// function isThisAZipCode(candidate) {
// return /^\{5}-\d{4}$/.test(candidate);
// }

// so... why would i use the first example? Thats right, I shouldn't!
