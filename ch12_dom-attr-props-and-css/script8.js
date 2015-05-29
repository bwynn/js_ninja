// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines the style function
function style(element,name,value) {
  // converts the name to camel case
  name = name.replace(/-([a-z])/ig,
                     function(all,letter) {
                       return letter.toUpperCase();
                     });

  // sets value if provided
  if (typeof value !== 'undefined') {
    element.style[name] = value;
  }
  // returns value
  return element.style[name];
}

window.onload = function() {
  var div = document.getElementsByTagName('div')[0];

  assert(true, style(div,'color'));
  assert(true, style(div, 'font-size'));
  assert(true, style(div, 'background-color'));
};
