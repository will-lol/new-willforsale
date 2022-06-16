var elements = document.getElementsByClassName("button");
var repeat = 0;

var vibrate = function() {
    window.navigator.vibrate([30, 10, 29, 10, 28, 10, 27, 10, 26, 10, 25, 10, 24, 10, 23, 10, 22, 10, 21, 10, 20, 10, 19, 10, 18, 10, 17, 10, 16, 10, 15, 10, 14, 10, 13, 10, 12, 10, 11, 10, 10, 10, 9, 10, 8, 10, 7, 10, 6, 10, 5, 10, 4, 10, 3, 10, 2, 10, 1, 10, 0]);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', vibrate, false);
}
