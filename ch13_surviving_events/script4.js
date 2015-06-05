// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

(function() {
  // establishes scoped storage
  var cache = {},
      guidCounter = 1,
      expando = "data" + (new Date).getTime();

  // defines the getData() function
  this.getData = function(elem) {
    var guid = elem[expando];
    if (!guid) {
      guid = elem[expando] = guidCounter++;
      cache[guid] = {};
    }
    return cache[guid];
  };

  // defines the removeData() function
  this.removeData = function(elem) {
    var guid = elem[expando];
    if (!guid) return;
    delete cache[guid];
    try {
      delete elem[expando];
    }
    catch (e) {
      if (elem.removeAttribute) {
        elem.removeAttribute(expando);
      }
    }
  };
})();

// fetches test subjects
var elems = document.getElementsByTagName("div");

for (var n = 0; n < elems.length; n++) {
  getData(elems[n]).ninja = elems[n].title;
}

// tests that data was stored
for (var n = 0; n < elems.length; n++) {
  assert(getData(elems[n]).ninja === elems[n].title,
        "Stored data is " + getData(elems[n]).ninja);
}

// tests that the data was destroyed
for (var n = 0; n < elems.length; n++) {
  removeData(elems[n]);
  assert(getData(elems[n]).ninja === undefined,
        "Stored data has been destroyed");
}
