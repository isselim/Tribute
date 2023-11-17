let slideIndex = 1;

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Display the first slide when the page loads
showSlides(slideIndex);

function toggleDescription(element) {
    const description = element.querySelector('.art-description');
    description.style.display = (description.style.display === 'none' || description.style.display === '') ? 'block' : 'none';
}
