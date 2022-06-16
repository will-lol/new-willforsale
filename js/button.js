var elements = document.getElementsByClassName("button");

var vibrate = function() {
    window.navigator.vibrate(50);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', vibrate, false);
}
