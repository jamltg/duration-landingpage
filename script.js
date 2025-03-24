const popupForm = document.getElementById('popupForm');
const closeForm = document.getElementById('closeForm');
const form = popupForm.querySelector('form'); // Select the form inside the modal
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Show the modal on page load
window.onload = () => {
  if (!localStorage.getItem('popupShown')) {
    popupForm.classList.add('active'); // Display the modal
    localStorage.setItem('popupShown', 'true'); // Ensure it doesn't show again
  }
};

// Close the modal when the 'X' button is clicked
closeForm.addEventListener('click', () => {
  popupForm.classList.remove('active'); // Hide the modal
});

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  
  // Close the modal
  popupForm.classList.remove('active');
  
  // Log input values for debugging (optional)
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('telephone').value;
  const company = document.getElementById('company').value;

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Telephone:', telephone);
  console.log('Company:', company);
});

hamburger.addEventListener('click', function () {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Hide navigation links when the user scrolls
window.addEventListener('scroll', function () {
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none'; // Automatically hide the links on scroll
  }
});

// Function to show the popup modal
const showPopup = () => {
  popupForm.classList.add('active'); // Display the modal
};

// Add an event listener to the "Show Popup" button
document.getElementById('showPopup').addEventListener('click', showPopup);
