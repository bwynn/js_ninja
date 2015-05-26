// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function globalEval(data) {
  // defines teh global eval function
  data = data.replace(/^\s*|\s*$/g, "");

  if (data) {
    var head = document.getElementsByTagName("head")[0] ||
               document.documentElement,
        // creates a script node
        script = document.createElement("script");

    script.type = "text/javascript";
    script.text = data;

    head.appendChild(script);
    // blows it away
    head.removeChild(script);
  }
}

window.onload = function() {
  // finds all script blocks
  var scripts = document.getElementsByTagName("script");
  // locates and executes "x/onload" blocks
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].type == 'x/onload') {
      globalEval(scripts[i].innerHTML);
    }
  }
};
