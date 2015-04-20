// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function MyArray() {}

MyArray.prototype = new Array();

var mine = new Array();
mine.push(1, 2, 3);

assert(mine.length == 3,
        "All the items are in our sub-classed array.");

assert(mine instanceof Array,
        "Verify that we implement Array functionality.");
