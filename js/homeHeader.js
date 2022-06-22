var line = document.getElementById("line");
var feature = document.getElementById("feature");
var length = line.getTotalLength();
line.style.strokeDasharray = length;
line.style.strokeDashoffset = length;
window.addEventListener("scroll", drawLine);
var amount = (-(window.innerHeight/2)+(window.innerHeight/3.7) + "px")

const guys = document.querySelectorAll(".homeHeader__feature__guy");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("reveal", entry.isIntersecting)
    })
},
{
    rootMargin: amount
})

guys.forEach(guy => {
    observer.observe(guy)
})

function drawLine() {
    var scrollRatio = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var draw = length * scrollRatio;
    line.style.strokeDashoffset = length - draw;
    console.log(scrollRatio);
}
