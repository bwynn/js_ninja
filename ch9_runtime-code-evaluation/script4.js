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
  (function() {
    globalEval("var test = 5;");
  })();

  assert(test === 5, "The code was evaluated globally");
};
