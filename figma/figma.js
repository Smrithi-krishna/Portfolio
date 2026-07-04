// ================================
// Fade In Animation on Scroll
// ================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".overview-card, .content-card, .step, .comparison-card, .gallery-item, .feature-card, .roadmap-item, .tool-badges span, .cta"
).forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// ================================
// Image Lightbox
// ================================

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;

        document.body.style.overflow = "hidden";

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";

    }

});


// ================================
// ESC Key closes Lightbox
// ================================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";

    }

});


// ================================
// Smooth Button Hover Animation
// ================================

document.querySelectorAll(".primary-btn, .secondary-btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0)";

    });

});


// ================================
// Card Hover Effect
// ================================

document.querySelectorAll(
    ".overview-card, .comparison-card, .feature-card, .gallery-item"
).forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(212,163,115,.12),
            white 70%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#fff";

    });

});


// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ================================
// Page Loaded Animation
// ================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});