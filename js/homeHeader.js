var line = document.getElementById("line");
var length = line.getTotalLength();
line.style.strokeDasharray = length;
line.style.strokeDashoffset = length;
window.addEventListener("scroll", drawLine);
function drawLine() {
  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  var draw = length * scrollpercent;
  line.style.strokeDashoffset = length - draw;
}