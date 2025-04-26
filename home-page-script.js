const duck = document.getElementById("Duck");
duck.style.transform = "scaleX(-1)";

let position = 0;
let direction = 1;
console.log()
let maxWidth = window.innerWidth - duck.offsetWidth;
let speed = maxWidth * 0.001;

const originalTitle = "The Mastermind - Home | ";
let positionTitle = 0;

function fixDuck() {
    maxWidth = window.innerWidth - duck.offsetWidth;
    speed = maxWidth * 0.001;
}

function reverseDuck() {
    direction *= -1;
    duck.style.transform = direction === 1 ? "scaleX(-1)" : "scaleX(1)";
}

function moveDuck() {
    position += speed * direction;

    if (position >= maxWidth) {
        direction = -1;
        duck.style.transform = "scaleX(1)";
    } else if (position <= 0) {
        direction = 1;
        duck.style.transform = "scaleX(-1)";
    }

    duck.style.left = position + "px";
}

function animateTitle() {
    document.title = originalTitle.slice(positionTitle) + originalTitle.slice(0, positionTitle);
    positionTitle = (positionTitle + 1) % originalTitle.length;
}

window.onscroll = function () {
    const nav = document.getElementById("nav-bar-opacitic");
    const footer = document.getElementById("footer");

    if (window.scrollY > 100) {
        nav.style.opacity = "100%";
    } else {
        nav.style.opacity = "0%";
    }

    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        footer.style.opacity = "100%";
        console.log("Reached bottom");
    } else {
        footer.style.opacity = "0%";
        console.log("Not at bottom");
    }
};

setInterval(animateTitle, 200);
setInterval(moveDuck, 10);
