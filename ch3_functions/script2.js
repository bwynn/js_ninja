// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

assert(true, '|------- Before Outer --------|');
assert(typeof outer === 'function',
        'outer() is in scope');
assert(typeof inner === 'function',
        'inner() is in scope');
assert(typeof a === 'number',
        'a is in scope');
assert(typeof b === 'number',
        'b is in scope');
assert(typeof c === 'number',
        'c is in scope');

function outer() {
  assert(true, '|------- Inside Outer, Before a --------|');
  assert(typeof outer === 'function',
          'outer() is in scope');
  assert(typeof inner === 'function',
          'inner() is in scope');
  assert(typeof a === 'number',
          'a is in scope');
  assert(typeof b === 'number',
          'b is in scope');
  assert(typeof c === 'number',
          'c is in scope');

  var a = 1;

  assert(true, '|------- Inside Outer, after a --------|');
  assert(typeof outer === 'function',
          'outer() is in scope');
  assert(typeof inner === 'function',
          'inner() is in scope');
  assert(typeof a === 'number',
          'a is in scope');
  assert(typeof b === 'number',
          'b is in scope');
  assert(typeof c === 'number',
          'c is in scope');

  function inner() {/* does nothing */}

  var b = 2;

  assert(true, '|------- Inside Outer, after inner() and b --------|');
  assert(typeof outer === 'function',
          'outer() is in scope');
  assert(typeof inner === 'function',
          'inner() is in scope');
  assert(typeof a === 'number',
          'a is in scope');
  assert(typeof b === 'number',
          'b is in scope');
  assert(typeof c === 'number',
          'c is in scope');

  if (a == 1) {
    var c = 3;
    assert(true, '|------- Inside Outer, Inside if --------|');
    assert(typeof outer === 'function',
            'outer() is in scope');
    assert(typeof inner === 'function',
            'inner() is in scope');
    assert(typeof a === 'number',
            'a is in scope');
    assert(typeof b === 'number',
            'b is in scope');
    assert(typeof c === 'number',
            'c is in scope');
  }

  assert(true, '|------- Inside Outer, outside if --------|');
  assert(typeof outer === 'function',
          'outer() is in scope');
  assert(typeof inner === 'function',
          'inner() is in scope');
  assert(typeof a === 'number',
          'a is in scope');
  assert(typeof b === 'number',
          'b is in scope');
  assert(typeof c === 'number',
          'c is in scope');
}

outer();

assert(true, '|------- After Outer --------|');
assert(typeof outer === 'function',
        'outer() is in scope');
assert(typeof inner === 'function',
        'inner() is in scope');
assert(typeof a === 'number',
        'a is in scope');
assert(typeof b === 'number',
        'b is in scope');
assert(typeof c === 'number',
        'c is in scope');
