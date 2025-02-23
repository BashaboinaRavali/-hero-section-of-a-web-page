// GSAP Animation for smooth text and image appearance
window.onload = () => {
    gsap.to('.hero-title', { opacity: 1, duration: 1, delay: 0.5, y: 0 });
    gsap.to('.hero-description', { opacity: 1, duration: 1, delay: 1, y: 0 });
    gsap.to('.image-gallery', { opacity: 1, duration: 1, delay: 1.5 });
};

// Mouse move effect for images
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
        container.classList.add('active');
    });

    container.addEventListener('mousemove', (event) => {
        const boundingBox = container.getBoundingClientRect();
        const offsetX = event.clientX - boundingBox.left;
        const offsetY = event.clientY - boundingBox.top;

        const moveX = (offsetX - boundingBox.width / 2) * 0.1;
        const moveY = (offsetY - boundingBox.height / 2) * 0.1;

        container.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    container.addEventListener('mouseleave', () => {
        container.classList.remove('active');
        container.style.transform = 'translate(0, 0)';
    });
});
