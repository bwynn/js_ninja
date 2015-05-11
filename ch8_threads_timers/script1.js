// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// finds the <tbody> element that we're goin to create
// a boatload of rows for
var tbody = document.getElementsByTagName("tbody")[0];

// makes 20,000 rows. I'd say that qualifies as a boatload!
for (var i = 0; i < 20000; i++) {
  var tr = document.createElement("tr");

  // creates an individual row
  for (var t = 0; t < 6; t++) {
    // for each row, cretes six cells, each with a text node
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(i + "," + t));
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}
