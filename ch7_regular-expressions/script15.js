// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// this regular expression allows any sequence of composed of a
// sequence of word characters, a backslash forllow by any
// character (even a backslash) or both
var pattern = /^((\w+)|(\\.))+$/;

// sets up various test subjects. All should pass but the last,
// which fails to escape ist non-word character (:)
var tests = [
  "formUpdate",
  "form\\.update\\.whatever",
  "form\\:update",
  "\\f\\o\\r\\m\\u\\p\\d\\a\\t\\e",
  "form:update"
];

// runs through all test subjects
for (var n = 0; n < tests.length; n++) {
  assert(pattern.test(tests[n]),
        tests[n] + " is a valid identifier");
}
