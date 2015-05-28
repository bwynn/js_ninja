// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

window.onload = function() {
  // obtains element reference
  var div = document.getElementsByTagName("div")[0];

  // tests the dom method
  div.setAttribute("id", "ninja-1");
  assert(div.getAttribute('id') === 'ninja-1',
        "Attribute sucessfully changed");

  // tests the property value
  div.id = "ninja-2";
  assert(div.id === "ninja-2",
        "Property successfully changed");

  div.id = "ninja-3";
  assert(div.id === "ninja-3",
        "Property successfully changed.");
  assert(div.getAttribute('id') === "ninja-3",
        "Attribute successfully changed via the property.");

  // tests more property/attribute correspondence
  div.setAttribute("id", "ninja-4");
  assert(div.id === "ninja-4",
        "Property successfully changed via attribute");
  assert(div.getAttribute('id') === "ninja-4",
        "Attribute successfully changed");
};
