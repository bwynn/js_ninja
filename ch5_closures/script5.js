// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// establishes a click handler on the test button. this funciotn
// passed to the click method will be called whenever the button is clicked
$("#testButton").click(function(e) {
  // declares a variable named elem$ that contains a reference to the
  // div element defined within the html doc
  var elem = $("#testSubject");

  // preloads the div with some test to let the user know that something
  // is going on
  elem.html("Loading...");

  $.ajax({
    url: "test.html",
    success: function(html) {
      // within the argument list passed to the jquery ajax method
      // we define a callback to be called when the ajax request
      // returns its response from the server. the response text
      // is passed to the callback in the html parameter, which we
      // inject into the div element through the elem$ variable in the
      // closure
      assert(elem, "We can see elem$, via the closure for this callback");
      elem.html(html);
    }
  });
});
