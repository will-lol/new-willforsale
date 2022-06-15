var elements = document.getElementsByClassName("button");

var vibrate = function() {
    navigator.vibrate(200);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}
