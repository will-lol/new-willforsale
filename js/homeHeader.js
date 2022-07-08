var amount = (-(window.innerHeight/2)+(window.innerHeight/3.7) + "px")

const guys = document.querySelectorAll(".homeHeader__feature__guy");
const observerGuys = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("reveal", entry.isIntersecting)
    })
},
{
    rootMargin: amount
})

guys.forEach(guy => {
    observerGuys.observe(guy)
})

var feature = document.getElementById("feature");
var line = document.getElementById("line");
var length = line.getTotalLength();
var draw, length;
line.style.strokeDasharray = length;
line.style.strokeDashoffset = length;
var clientHeight = document.documentElement.clientHeight;
window.addEventListener("scroll", function(){
    requestAnimationFrame(drawLine);
});

function drawLine() {
    var scrollRatio = (document.documentElement.scrollTop) / (document.documentElement.scrollHeight - clientHeight);
    if (scrollRatio > 1) {
        scrollRatio = 1;
    }
    draw = length * scrollRatio;
    line.style.strokeDashoffset = length - draw;
}

observerNav = new IntersectionObserver(hideElement => {
    document.getElementById("scrollingText").classList.toggle("hideY", entry.isIntersecting);
    
}, {
    threshold: 0.1
})