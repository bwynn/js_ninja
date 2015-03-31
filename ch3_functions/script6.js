// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines the for-each function
function forEach(list, callback) {
  for (var n = 0; n < list.length; n++) {
    callback.call(list[n], n);            // invokes the callback
  }
}

// sets up the test subject
var weapons = ['shuriken', 'katana', 'nunchucks'];

forEach(weapons, function(index) {
  assert(this == weapons [index], "Got the expected value of " +
          weapons [index]);
});
