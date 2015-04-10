// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines a value in gobal scope
var outerValue = 'ninja';

// declares a function in the global scope
function outerFunction() {
  assert(outerValue == "ninja", "I can see the ninja.")
}

outerFunction();
