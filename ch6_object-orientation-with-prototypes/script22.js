// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

(function() {
  var initializing = false,
  // this gnarly regex determines if functions can be serialized.
      superPattern = /xyz/.test(function() { xyz; }) ? /\b_super\b/ : /.*/;

  // adds a subClass method to the Object
  Object.subClass = function(properties) {
    var _super = this.prototype;

    // instantiates the superclass
    initializing = true;
    var proto = new this();
    initializing = false;

    for (var name in properties) {
      proto[name] = typeof properties[name] == 'function' &&
                    typeof _super[name] == 'function' &&
                    superPattern.test(properties[name]) ?
                    // defines an overriding function
                    (function(name, fn) {
                      return function() {
                        var tmp = this._super;

                        this._super = _super[name];

                        var ret = fn.apply(this, arguments);
                        this._super = tmp;

                        return ret;
                      };
                    })(name, properties[name]) :
                    properties[name];
    }

    function Class() {
      // all construction is actually done in the init method
      if (!initializing && this.init)
      this.init.apply(this, arguments);
    }

    // populates the class prototype
    Class.prototype = proto;

    // overrides the constructor reference
    Class.constructor = Class;

    // makes the class extendable
    Class.subClass = arguments.callee;

    return Class;
  };
})();
