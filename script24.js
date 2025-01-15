// // Toggle menu and navbar when the menu icon is clicked
// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// // Typed.js animation
// const typed = new Typed('.multiple-text', {
//     strings: ['Frontend Developer.', 'Software Developer', 'Web Developer'],
//     typeSpeed: 80,
//     backSpeed: 80,  
//     backDelay: 1200,
//     loop: true,
// });

// Toggle menu and navbar when the menu icon is clicked
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll to sections when navbar links are clicked
let navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let targetId = e.target.getAttribute('href').slice(1); // Get the section id
        let targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Typed.js animation
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer.', 'Software Developer', 'Web Developer'],
    typeSpeed: 80,
    backSpeed: 80,  
    backDelay: 1200,
    loop: true,
});

// Get references to the form and message status
let form = document.getElementById('contactForm');
let messageStatus = document.getElementById('messageStatus');

// Event listener for form submission
form.onsubmit = function (e) {
    e.preventDefault();  // Prevent form from reloading the page

    // Get the values of the form fields
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    // Check if all fields are filled (you can extend this check for other fields too)
    if (name && phone) {
        // Show the "Message Sent" notification
        messageStatus.innerHTML = `<p>Message Sent! Thank you, ${name}. We will get back to you soon.</p>`;
        messageStatus.style.color = 'green';

        // Optionally, reset the form fields after submission (optional)
        form.reset();

        // Activate all fields (this is just to visually show the form is active)
        let inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.disabled = false;  // Make sure fields are not disabled
        });
    } else {
        // Show error message if the name or phone is missing
        messageStatus.innerHTML = `<p>Please fill in all required fields.</p>`;
        messageStatus.style.color = 'red';
    }
};
