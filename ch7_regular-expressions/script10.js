// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function compress(source) {
  var keys = {};

  // extracts key/value info
  source.replace(
    /([^=&]+)=([^&]*)/g,
    function(full, key, value) {
      keys[key] =
      (keys[key] ? keys[key] + "," : "") + value;
      return "";
    }
  );

  // collects key info
  var result = [];
  for (var key in keys) {
    result.push(key + "=" + keys[key]);
  }
  // joins result with &
  return result.join("&");
}

assert(compress("foo=1&foo=2&blah=a&blah=b&foo=3") == "foo=1,2,3&blah=a,b",
      "Compression is okay!")
