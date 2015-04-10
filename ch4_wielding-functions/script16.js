// stores the previous function because we may need to call it if the
// passed function doesnt have a matching number of arguments
function addMethod(object, name, fn) {
  var old = object[name];
  // creates a new anonymous function that becomes the method
  object[name] = function() {
    // invokes the passed function if it's parameter and arguments
    // count match
    if (fn.length == arguments.length)
      return fn.apply(this, arguments)
    // invokes the previous function if passed function isn't a match
    else if (typeof old == 'function')
    return old.apply(this, arguments);
  };
}
