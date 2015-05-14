(function() {
  // retains state
  var queue = [], paused = false;

  // defines the test registration function
  this.test = function(fn) {
    queue.push(fn);
    runTest();
  };

  // defines the function to pause testing
  this.pause = function() {
    paused = true;
  };

  // defines the resume function
  this.resume = function() {
    paused = false;
    setTimeout(runTest, 1);
  };

  // runst the tests
  function runTest() {
    if (!paused && queue.length) {
      queue.shift()();
      if(!paused) resume();
    }
  }
})();
