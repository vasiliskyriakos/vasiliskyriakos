// Select all sections to observe
const sections = document.querySelectorAll('.section');
const options = {
    threshold: 0.5 // Trigger when 50% of the section is visible
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Select elements within the intersecting section
        const line = entry.target.querySelector('.line');
        const image = entry.target.querySelector('.image');
        const slideElements = entry.target.querySelectorAll('.slide-in');

        if (entry.isIntersecting) {
            // Add the active class to the line to start its animation
            line.classList.add('active');

            // Show the image after a delay
            setTimeout(() => {
                image.classList.add('visible');
            }, 200); 

            // Show the slide-in elements (title and description) after the image appears
            setTimeout(() => {
                slideElements.forEach(element => element.classList.add('active'));
            }, 100);

            // Complete the line animation after the image appears
            setTimeout(() => {
                line.classList.add('complete');
            }, 100); 
        } else {
            // Remove classes when elements go out of view (optional)
            line.classList.remove('active', 'complete');
            image.classList.remove('visible');
            slideElements.forEach(element => element.classList.remove('active'));
        }
    });
}, options);

// Observe each section
sections.forEach(section => observer.observe(section));
