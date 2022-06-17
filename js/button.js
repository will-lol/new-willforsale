var elements = document.getElementsByClassName("button");
var repeat = 0;

var vibrate = function() {
    window.navigator.vibrate([15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10]);
    window.addEventListener('mouseup', e => {
        window.navigator.vibrate([15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10, 15, 10]);
    });
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', vibrate, false);
}
