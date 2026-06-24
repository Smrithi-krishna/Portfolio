const words = [
    "Computer Science Engineering Student",
    "Web Developer",
    "Cybersecurity Enthusiast",
    "Open Source Learner",
    "AI Enthusiast",
    "Aspiring Software Developer"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("success-message");

contactForm.addEventListener("submit", () => {
    successMessage.style.display = "block";
});

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    if(isDark){

        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    }else{

        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
});


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});

const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".highlight-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if(filter === "all"){
                card.style.display = "block";
            }
            else if(card.classList.contains(filter)){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }

        });

    });

});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        backToTop.style.display = "flex";
    }else{
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
