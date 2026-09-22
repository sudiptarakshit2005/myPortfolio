/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML = "✕";

    } else {

        menuBtn.innerHTML = "☰";

    }

});


/* CLOSE MENU */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = "☰";

    });

});



/* =========================
   CHANGING TEXT
========================= */

const words = [

    "DEVELOPER",

    "PROGRAMMER",

    "TECH ENTHUSIAST",

    "CREATOR",

    "LEARNER"

];

let currentWord = 0;

const changingText =
    document.getElementById("changingText");


setInterval(function () {

    changingText.style.opacity = "0";


    setTimeout(function () {

        currentWord++;

        if (currentWord >= words.length) {

            currentWord = 0;

        }

        changingText.textContent =
            words[currentWord];

        changingText.style.opacity = "1";

    }, 300);

}, 2200);



/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
    document.querySelector(".cursor");

const cursorOutline =
    document.querySelector(".cursor-outline");


document.addEventListener("mousemove", function(event) {

    cursor.style.left =
        event.clientX + "px";

    cursor.style.top =
        event.clientY + "px";


    cursorOutline.style.left =
        event.clientX + "px";

    cursorOutline.style.top =
        event.clientY + "px";

});



/* =========================
   CURSOR HOVER EFFECT
========================= */

const hoverElements =
    document.querySelectorAll("a, button, .skill-card");


hoverElements.forEach(function(element) {

    element.addEventListener("mouseenter", function() {

        cursorOutline.style.transform =
            "translate(-50%, -50%) scale(1.8)";

    });


    element.addEventListener("mouseleave", function() {

        cursorOutline.style.transform =
            "translate(-50%, -50%) scale(1)";

    });

});