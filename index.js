document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll(".parallax").forEach((element) => {
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 100}px, ${y * speed * 100}px)`;
    })
})

document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll(".parallax2").forEach((element) => {
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
    })
})



// TESTIMONIAL SLIDER
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    const counter = document.querySelector('.slide-counter');
  
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }
  
    function updateCounter(index) {
        counter.textContent = `${String(index + 1).padStart(2, '0')}/${String(totalSlides).padStart(2, '0')}`;
    }
  
    document.querySelector('.prev').addEventListener('click', function() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
        showSlide(currentSlide);
        updateCounter(currentSlide);
    });
  
    document.querySelector('.next').addEventListener('click', function() {
        currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
        updateCounter(currentSlide);
    });
  
    // Show the first slide and update counter initially
    showSlide(currentSlide);
    updateCounter(currentSlide);
  });