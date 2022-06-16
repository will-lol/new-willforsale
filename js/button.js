var elements = document.getElementsByClassName("button");
var repeat = 0;

var vibrate = function() {
    window.navigator.vibrate([30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10]);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', vibrate, false);
}
