// Get reference to the button and the body
const toggleButton = document.getElementById('toggle-bg-btn');
const body = document.body;

// Define the URLs for the background images
const bgImage1 = 'url("pc2.jpg")';
const bgImage2 = 'url("pc3.png")';

// Add an event listener to the button
toggleButton.addEventListener('click', () => {
    // Check the current background image and toggle it
    if (body.style.backgroundImage === bgImage1) {
        body.style.backgroundImage = bgImage2;
    } else {
        body.style.backgroundImage = bgImage1;
    }
});
