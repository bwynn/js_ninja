// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines an object to retain state regarding our button
// with it, we'll track whether the button has been clicked or not
var button = {
  clicked: false,
  // declares the method that we'll use as the click handler.
  // because it's a mehtod of the object, we use this within
  // the function to get a reference to the object
  click: function() {
    this.clicked = true;
    assert(button.clicked, "The button has been clicked.");
  }
};
// establishes the click handler on the button
var elem = document.getElementById('test');
elem.addEventListener('click', button.click, false);

// this fails because the reference to the button.click object was
// not referencing the functional nature of the button.click object.
// button.click() would work just fine
