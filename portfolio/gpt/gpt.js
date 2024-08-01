document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform validation or additional processing here

    // For demonstration purposes, we just display a message
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Thank you, ${name}. Your message has been sent!`;
    
    // You can replace the above line with code to send the email using a service like EmailJS or a backend server
});
