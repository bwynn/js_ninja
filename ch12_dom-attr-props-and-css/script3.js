// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// creates a private scope
(function() {
  // creates the translation map
  var translations = {
    "for": "htmlFor",
    "class": "className",
    readonly: "readOnly",
    maxlength: "maxLength",
    cellspacing: "cellSpacing",
    rowspan: "rowSpan",
    colspan: "colSpan",
    tabindex: "tabIndex",
    cellpadding: "cellPadding",
    usemap: "useMap",
    frameborder: "frameBorder",
    contenteditable: "contentEditable"
  };

  // defines the set/get function
  window.attr = function(element, name, value) {
    var property = translations[name] || name,
        propertyExists = typeof element[property] !== "undefined";

    if (typeof value !== "undefined") {
      if (propertyExists) {
        element[property] = value;
      }
      else {
        element.setAttribute(name);
      }
    }

    return propertyExists ?
          element[property] :
          element.getAttribute(name);
  };
})();

// tests our new function
var subject = document.getElementById('testSubject');
assert(attr(subject, 'id') === "testSubject",
      "id value fetched");

assert(attr(subject, 'id', 'other') === 'other',
      "new id value set");
assert(attr(subject, 'id') === 'other',
      "new id value fetched");

assert(attr(subject, 'data-custom', 'whatever') === 'whatever',
      "custom attribute set");
assert(attr(subject, 'data-custom') === 'whatever',
      "custom attribute fetched"); 
