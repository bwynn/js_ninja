// declares the timer control object
var timers = {
  // records state
  timerID: 0,
  timers: [],

  // creates the function to add handlers
  add: function(fn) {
    this.timers.push(fn);
  },

  // creates the function to start a timer
  start: function() {
    if (this.timerID) return;
    (function runNext() {
      if(timers.timers.length > 0) {
        for (var i = 0; i < timers.timers.length; i++) {
          if (timers.timers[i]() === false) {
            timers.timers.splice(i,1);
            i--;
          }
        }
        timers.timerID = setTimeout(runNext, 0);
      }
    })();
  },

  // creates the function to stop a timer
  stop: function() {
    clearTimeout(this.timerID);
    this.timerID = 0;
  }
};

var box = document.getElementById("box"), x = 0, y = 20;

timers.add(function() {
  box.style.left = x + "px";
  if (++x > 50) return false;
});

timers.add(function() {
  box.style.top = y + "px";
  y += 2;
  if (y > 120) return false;
});

timers.start();
