var rowCount = 20000;
var divideInto = 4;
var chunkSize = rowCount/divideInto;
var iteration = 0;

var table = document.getElementsByTagName("tbody")[0];

setTimeout(function generateRows() {
  var base = (chunkSize) * iteration;
  for (var i = 0; i < chunkSize; i++) {
    var tr = document.createElement("tr");
    for (var t = 0; t < 6; t++) {
      var td = document.createElement("td");
      td.appendChild(
        document.createTextNode((i + base) + "," + t + "," + iteration));
      tr.appendChild(td)
    }
    table.appendChild(tr);
  }
  iteration++;
  if (iteration < divideInto)
  setTimeout(generateRows, 0);
},0);
