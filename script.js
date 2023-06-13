// Add image slider functionality using JavaScript

// Array of image URLs
const images = [
  'https://tigosoftware.com/sites/default/files/2022-09/management-information-system-mis-provides-organizations-require-to-manage-themselves-efficiently-effectively-45574142.jpg',
  'https://previews.123rf.com/images/adiruch/adiruch1608/adiruch160800547/64863884-mis-management-information-system-data-development-information-and-mis-businessman-working-at-office.jpg',
  'https://img.freepik.com/premium-vector/mis-management-information-system-concept-with-icon-set-with-big-word-text-center_25156-1323.jpg?w=2000'

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
