// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines an instance method with the same name as a prototype mehtod
function Ninja() {
  this.swung = true;
  this.swingSword = function() {
    return !this.swung;
  };
}

var ninja = new Ninja();

// defines a prototyped method with same name as the instance method
Ninja.prototype.swingSword = function() {
  return this.swung;
};

assert(ninja.swingSword(),
          "Called the instance method, not the prototype method");
