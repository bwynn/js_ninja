// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

window.onload = function() {
  var form = document.getElementById("testForm");

  // tests is properties have been stomped upon
  assert(form.id === 'testForm',
        "The id is untouched");
  assert(form.action === '/',
        "The action property is untouched");

  //tests if attributes have been mangled
  assert(form.getAttribute('id') === 'testForm',
        "the id attribute is untouched");
  assert(form.getAttribute('action') === '/',
        "the action attribute is untouched");
};
