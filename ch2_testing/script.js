function log() {
  try {
    console.log.apply(console, arguments); // tries to log msg
  }
  catch(e) {
    try {
      opera.postError.apply(opera, arguments);  // cathes any failure in logging
    }
    catch(e) {
      alert(Array.prototype.join.call(arguments, ' ')); // uses alert if all else fails
    }
  }
}
