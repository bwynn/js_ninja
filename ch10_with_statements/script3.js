// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

var ninja = { foo: "bar" },
    value,
    maxCount = 1000000,
    n,
    start,
    elapsed;

// tests without with
start = new Date().getTime();
for (n = 0; n < maxCount; n++) {
  value = ninja.foo;
}

elapsed = new Date().getTime() - start;
assert(true, "without with: " + elapsed);

// tests referencing
start = new Date().getTime();
with(ninja) {
  for (n = 0; n < maxCount; n++) {
    value = foo;
  }
}

elapsed = new Date().getTime() - start;
assert(true, "With (with access): " + elapsed);

// tests assignment
start = new Date().getTime();
with(ninja){
  for (n = 0; n < maxCount; n++) {
    foo = n;
  }
}

elapsed = new Date().getTime() - start;
assert(true, "With (with assignment): " + elapsed);

start = new Date().getTime();
with(ninja) {
  for (n = 0; n < maxCount; n++) {
    value = "no test";
  }
}

elapsed = new Date().getTime() - start;
assert(true, "with (without access): " + elapsed);
