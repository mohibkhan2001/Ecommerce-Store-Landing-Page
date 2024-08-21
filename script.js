const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let index = 0;

function updateArrows() {
  // Disable left arrow if on the first slide
  leftArrow.disabled = index === 0;
  
  // Disable right arrow if on the last slide
  rightArrow.disabled = index === slides.length - 1;
}

function showSlide(n) {
  if (n >= slides.length) index = 0;
  if (n < 0) index = slides.length - 1;
  slider.style.transform = `translateX(-${index * 100}%)`;
  
  // Update arrow states
  updateArrows();
}

// Initialize arrows state
updateArrows();

leftArrow.addEventListener('click', () => {
  if (index > 0) {
    index--;
    showSlide(index);
  }
});

rightArrow.addEventListener('click', () => {
  if (index < slides.length - 1) {
    index++;
    showSlide(index);
  }
});

// Automatically move to the next slide every 5 seconds
setInterval(() => {
  index++;
  showSlide(index);
}, 5000);


// for hamburger

function toggleNav() {
  var navList = document.getElementById("nav-list");
  navList.classList.toggle("active");
}


// search bar

document.addEventListener('DOMContentLoaded', () => {
  const searchIcon = document.getElementById('search-icon');
  const searchBar = document.getElementById('search-bar');
  const searchClose = document.getElementById('search-close');

  searchIcon.addEventListener('click', () => {
      searchBar.classList.toggle('visible');
      searchBar.classList.toggle('hidden');
  });

  searchClose.addEventListener('click', () => {
      searchBar.classList.add('hidden');
      searchBar.classList.remove('visible');
  });
});
