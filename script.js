
document.addEventListener('DOMContentLoaded', function() {
    const sectionTitles = document.querySelectorAll('.section-title');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const title = entry.target;
                const titleWidth = title.scrollWidth; // Get the full width of the content
                title.style.setProperty('--target-width', `${titleWidth}px`); // Set the width as a CSS variable
                title.classList.add('typing-animation');
                observer.unobserve(title); // Stop observing after animation triggers
            }
        });
    }, {
        threshold: 0.5 // Adjust this value to trigger the animation earlier or later
    });

    sectionTitles.forEach(title => {
        observer.observe(title);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const dotLinks = document.querySelectorAll('.dot-link');

    function activateSection() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        dotLinks.forEach((link) => link.classList.remove('active'));

        navLinks[index].classList.add('active');
        dotLinks[index].classList.add('active');
    }

    activateSection();
    window.addEventListener('scroll', activateSection);
});


document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    document.querySelectorAll("[data-animate]").forEach(element => {
        observer.observe(element);
    });
});


// JavaScript to toggle light and dark themes

document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
});
