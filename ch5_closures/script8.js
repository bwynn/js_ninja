// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines a 'binding' function that wraps a call to the method of an
// object within another
function bind(context, name) {
  return function() {
    return context[name].apply(context,arguments);
  }
}

var button = {
  clicked: false,
  click: function() {
    this.clicked = true;
    assert(button.clicked, "The button has been clicked.");
    console.log(this);
  }
};
// uses the binding function to bind the button object
// as the context of the handler
var elem = document.getElementById('test');
elem.addEventListener('click',bind(button,"click"), false);
