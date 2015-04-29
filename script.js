var dot = document.querySelectorAll('#hash li a');
var next = document.getElementById('next');
var adv = {
  next: function() {
    for (var i = 0; i < dot.length; i+= 1) {
      dot[i].removeAttribute('class');
      i++;
    }
  }
}

next.addEventListener('click', function(e) {
  e.preventDefault();
  adv.next();
},false);
