var elements = document.getElementsByClassName("button");

var vibrate = function() {
    window.navigator.vibrate(200);
    console.log("vibration sent")
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', vibrate, false);
}
