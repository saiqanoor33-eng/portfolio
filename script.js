```javascript
/* =========================================
   MOBILE MENU
========================================= */

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

if (menuIcon && navLinks) {

    menuIcon.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const icon = menuIcon.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        } else {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });


    /* Close mobile menu after clicking a link */

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            const icon = menuIcon.querySelector("i");

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================
   TYPING ANIMATION
========================================= */

const typingElement = document.getElementById("typing");

const words = [
    "Computer Science Student",
    "Web Developer",
    "Python Developer",
    "AI Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    /* Typing */

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        /* When word is completely typed */

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    }

    /* Deleting */

    else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        /* Move to next word */

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = deleting ? 50 : 90;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        if (name === "") {

            alert("Please enter your name.");

            return;
        }

        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );

        contactForm.reset();

    });

}


/* =========================================
   SCROLL ANIMATION
========================================= */

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.1
        }

    );


    cards.forEach(function (card) {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(30px)";

        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.style.color = "#c7c7c7";

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.style.color = "#00d4ff";

        }

    });

});
```
