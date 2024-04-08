const reviewElement = document.querySelector('.google-review');
const rating = 4.6; // Replace with your actual rating

// Function to set star rating based on a value
function setStarRating(rating) {
  const stars = reviewElement.querySelectorAll('.star-rating span');
  for (let i = 0; i < Math.floor(rating); i++) {
    stars[i].classList.add('full-star');
  }
  if (rating % 1 !== 0) {
    stars[Math.floor(rating)].classList.add('half-star');
  }
}

setStarRating(rating);