const slider = document.querySelector('.testimonial-slider');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = dots.length;

function updateSlider(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider(currentIndex);
  });
});

// Optional: Auto slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider(currentIndex);
}, 5000);

// Initialize
updateSlider(currentIndex);


//full image---------------------------
let slideIndex2 = 0;
const slides2 = document.querySelectorAll('.slides-2 p');
const dots2 = document.querySelectorAll('.dot-2');

function showSlide2(index) {
  slides2.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots2[i].classList.toggle('active', i === index);
  });
}

function nextSlide2() {
  slideIndex2 = (slideIndex2 + 1) % slides2.length;
  showSlide2(slideIndex2);
}

setInterval(nextSlide2, 3000); // Auto switch every 3 seconds
showSlide2(slideIndex2); // Initial display
