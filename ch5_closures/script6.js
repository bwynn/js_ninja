// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// inside the animateIt() function, we get a reference to that element
function animateIt(elementId) {
  var elem = document.getElementById(elementId);
  // establishes a counter to keep track of animation ticks
  var tick = 0;

  // creates and starts an interval timer given a callback function that
  // will be invoked every 10 milliseconds. For 100 ticks it will adjust
  // the position of the element
  var timer = setInterval(function() {
    if (tick < 100) {
      elem.style.left = elem.style.top = tick + 'px';
      tick++;
    } else {
      clearInterval(timer);
      // after 100 ticks we stop the timer and perform tests to assert
      // that we can see all the relevant variables needed to
      // perform the animation
      assert(tick == 100,
            "Tick accessed via a closure.");
      assert(elem,
            "Element also accessed via a closure.");
      assert(timer,
            "Timer reference also obtained via a closure");
    }
  }, 10);
}

// now that it's all set up, we set it in motion!
animateIt('box');
