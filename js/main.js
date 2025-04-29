let buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(b => {
    b.addEventListener("click", buttonAnchor)
});

function buttonAnchor(e) {
    let target = e.target;
    open(target.getAttribute("href"), "_self")
}


let flashcards = Array.from(document.querySelectorAll('.profile-holder img[href]'));
flashcards.forEach(b => {
    b.addEventListener("click", flashcardAnchor)
});

function flashcardAnchor(e) {
    let target = e.target;
    console.log(e.target);
    
    open(target.getAttribute("href"), "_self")
}
