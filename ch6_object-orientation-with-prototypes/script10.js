// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// tests for pre-existence of the method. we don't want to redefine
// it in browsers that provide it for us.
if (!Array.prototype.forEach) {
  // adds the method to the Array prototype. After this, it's a method
  // of all arrays.
  Array.prototype.forEach = function(callback, context) {
    for (var i = 0; i < this.length; i++) {
      // calls the callbak function for each array entry
      callback.call(context || null, this[i], i, this);
    }
  };
}

["a", "b", "c"].forEach(function(value, index, array) {
  assert(value,
        "Is in position " + index + " out of " +
        (array.length - 1));
});
