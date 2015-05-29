// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

window.onload = function() {
  var div = document.getElementsByTagName("div")[0];

  // tests that the inlined color style was recorded
  assert(div.style.color == 'rgb(0,0,0)' ||
         div.style.color == '#000' ||
         div.style.color == 'black',
         "color was recorded");

  // tests that the inherited font size style was recorded
  assert(div.style.fontSize == '1.8em',
         "fontSize was recorded");

  // tests that the inherited border widht style was recorded
  assert(div.style.borderWidth == '1px',
         "borderWidth was recorded");

  // replaces the border width style
  div.style.borderWidth = "4px";

  // tests it
  assert(div.style.borderWidth == '4px',
         "borderWidth was replaced")
};
