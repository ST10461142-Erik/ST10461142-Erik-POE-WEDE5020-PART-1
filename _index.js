window.onload = function() {
    const navLinks = document.querySelectorAll('.navmenu a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.backgroundColor = 'rgba(0, 100, 0, 1)';
        }
    });
};
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#contactForm').addEventListener('submit', function(e) {
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (!email.includes('@')) {
            e.preventDefault();
            alert('Invalid Email address');
        } else if (message.trim() === '') {
            e.preventDefault();
            alert('Please Write a Message');
        } else {
            alert("Form submitted successfully!");
            // No `e.preventDefault()` here, so form submits naturally
        }
    });
});

const videoContainer = document.querySelector('.video-container iframe');
const modal = document.createElement('div');
modal.style.display = 'none'; // Hide modal initially
modal.innerHTML = `<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;">
                    <iframe width="560" height="315" src="${videoContainer.src}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  </div>`;
document.body.appendChild(modal);

videoContainer.addEventListener('click', () => {
    modal.style.display = 'block';
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

function validateJoinForm() {
    let name = document.forms["joinForm"]["name"].value;
    let email = document.forms["joinForm"]["email"].value;
    let message = document.forms["joinForm"]["message"].value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out.");
        return false;
    }
    
    let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Display a confirmation message (if you have an element with id "confirmationMessage")
    document.getElementById("confirmationMessage").style.display = "block";
    return false; // Prevents form submission for demonstration purposes
}


window.onload = function() {
    const welcomeHeading = document.querySelector('.welcome-heading');
    welcomeHeading.style.opacity = '0'; 
    welcomeHeading.style.transform = 'translateY(20px)'; 
    welcomeHeading.style.transition = 'opacity 1s ease, transform 1s ease'; 

    // Trigger the animation for welcome heading
    setTimeout(() => {
        welcomeHeading.style.opacity = '1'; // Fade in
        welcomeHeading.style.transform = 'translateY(0)'; // Move to original position
    }, 100); // Adjust delay as needed

    // Fade-in effect for video container
    const videoContainer = document.querySelector('.video-container');
    videoContainer.style.opacity = '0'; // Start hidden
    videoContainer.style.transition = 'opacity 1s ease'; // Transition property

    // Trigger the fade-in animation after a slight delay
    setTimeout(() => {
        videoContainer.style.opacity = '1'; // Fade in
    }, 500); // Adjust delay as needed
};

// Button hover animation
const buttons = document.querySelectorAll('div.navmenu a');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)'; // Enlarge on hover
        button.style.transition = 'transform 0.3s'; // Smooth transition
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)'; // Reset size on mouse leave
    });
});
