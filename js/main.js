let buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(b => {
    b.addEventListener("click", buttonAnchor)
});

function buttonAnchor(e) {
    let target = e.target;
    open(target.getAttribute("href"))
}
