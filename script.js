// Add image slider functionality using JavaScript

// Array of image URLs
const images = [
    'image 1.png',
    'image 2.png',
    'image 3.png'
  ];
  
  let currentImageIndex = 0;
  const imageElement = document.getElementById('slider-image');
  
  // Function to change the image
  function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
  }
  
  // Change the image every 3 seconds
  setInterval(changeImage, 3000);
  
  const themeCheckbox = document.getElementById('theme-checkbox');
const body = document.body;

themeCheckbox.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});
