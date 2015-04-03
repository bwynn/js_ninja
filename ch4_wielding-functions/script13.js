// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

//implements a function to find the smallest value
function smallest(array) {
  return Math.min.apply(Math, array);
}

// implents a function to find the largest value
function largest(array) {
  return Math.max.apply(Math, array);
}

assert(smallest([0,1,2,3]) == 0, "located the smallest value");
assert(largest([0,1,2,3]) == 3, "located the largest value");
