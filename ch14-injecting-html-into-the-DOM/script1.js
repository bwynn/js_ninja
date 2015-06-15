// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// ues a regular expression to match the tag name of any elements
// we dont need to be concerned about
var tags = /^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i;

// a function that usees reg exp to convert self closing tags to "normal" form
function convert(html) {
  return html.replace(/(<(\w+)[^>]*?)\/>/g, function(all, front, tag) {
    return tags.test(tag) ?
      all :
      front + "></" + tag + ">";
  });
}

assert(convert("<a/>") == "<a></a>",
        "Check anchor conversion");
assert(convert("<hr/>") == "<hr/>", "Check hr conversion");
