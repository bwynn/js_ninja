// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines the function
function test(a) { return a + a; }

assert(test.toString() === "function test(a) { return a + a; }",
      "Function decompiled");
