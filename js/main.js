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




let title = document.querySelectorAll(".navtitle div")[0];
let gokuholder = document.createElement('div');
gokuholder.id = "gokuholder";
document.body.appendChild(gokuholder);
title.onclick = () => {goku()}

function goku() {
    let image = new Image();
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    image.src = '../img/Goku.png';
    image.classList.add("goku");
    image.style.left = (Math.random() * screenWidth) + 'px';
    image.style.top = (Math.random() * screenHeight) + 'px';
    image.style.opacity = Math.random() * 0.25;
    image.style.width = (Math.random() * 250) + 'px';
    image.style.rotate = (Math.random() * 360) + 'deg';

    gokuholder.appendChild(image);
    setTimeout(() => {
        image.remove();
    }, (Math.random() * 5000) + 5000);
}


let desc = document.querySelectorAll('.desc')[0];

function highlightAboutUs() {
    desc.scrollIntoView();
    desc.classList.add("glow");
    setTimeout(() => {
        desc.classList.remove("glow");}, 1000)
}