var line = document.getElementById("line");
var length = line.getTotalLength();
line.style.strokeDasharray = length;
line.style.strokeDashoffset = length;
window.addEventListener("scroll", drawLine);
function drawLine() {
    var scrollRatio = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    console.log(scrollRatio);
    var draw = length * scrollRatio;
    line.style.strokeDashoffset = length - draw;
}