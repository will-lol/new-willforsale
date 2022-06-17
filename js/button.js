var elements = document.getElementsByClassName("button");
var repeat = 0;

var vibrateDown = function() {
    window.navigator.vibrate([15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10]);
};

var vibrateUp = function() {
    window.navigator.vibrate([15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10]);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mousedown', vibrateDown, false);
    elements[i].addEventListener('mouseup', vibrateUp, false);
}
