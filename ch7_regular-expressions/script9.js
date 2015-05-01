// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// converts to uppercase
function upper(all, letter) {return letter.toUpperCase()};

assert("border-bottom-width".replace(/-(\w)/g,upper) == "borderBottomWidth",
        "Camel cased a hyphenated string");
