// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// sets up variables in advance
var count = 5000000;
var n;
var begin = new Date();
var end;
var testSubject = document.getElementById('testSubject');
var value;

// tests a DOM method read
for (n = 0; n < count; n++) {
  value = testSubject.getAttribute('id');
}
end = new Date();
assert(true, 'Time for DOM method read: ' +
      (end.getTime() - begin.getTime()));

// tests a property read
begin = new Date();
for (n = 0; n < count; n++) {
  value = testSubject.id;
}
end = new Date();
assert(true, "Time for property read: " +
      (end.getTime() - begin.getTime()));

// tests a DOM method write
begin = new Date();
for (n = 0; n < count; n++) {
  testSubject.setAttribute('id', 'testSubject');
}
end = new Date();
assert(true, "Time for DOM method write: " +
      (end.getTime() - begin.getTime()));

// tests a property write
begin = new Date();
for (n = 0; n < count; n++) {
  testSubject.id = 'testSubject';
}
end = new Date();

assert(true, "Time for property write: " +
      (end.getTime() - begin.getTime()));
