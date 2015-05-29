// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

window.onload = function() {
  // creates a new element, letting the type attribute default
  var input = document.createElement("input");

  // sets the type property and checks it
  input.type = 'text';
  assert(input.type == 'text',
        "Input type is text");

  // inserts the new input element into the dom
  document.getElementById('testForm')
          .appendChild(input);

  input.type = 'hidden';
  assert(input.type == 'hidden',
        "Input type changed to hidden");
}
