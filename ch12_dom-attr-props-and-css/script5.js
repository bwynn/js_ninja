// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

var link = document.getElementById("testSubject");

// obtains the original node value right from the horse's mouth
// the node information that is
var linkHref = link.getAttributeNode("href").nodeValue;

// tests that the original node value matches that
// specified in the element markup. this test passes
assert(linkHref === 'demonstrating-url-normalization-issue.html',
      "link node value is ok");

// tests that the href property contains what we'd expect: the same
// value. But it doesn't! This test fails
assert(link.href === 'demonstrating-url-normalization-issue.html',
      "link property value is ok");

// tests that attribute value is what we expect, and it passes!
assert(link.getAttribute('href') === linkHref,
      "link attribute not modified");
