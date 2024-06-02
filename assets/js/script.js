// Toggle the display of skill lists
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', () => {
        skill.querySelector('.skill-list').classList.toggle('active');
    });
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    const formControls = this.querySelectorAll('.form-control');

    formControls.forEach(input => {
        if (!input.value) {
            input.classList.add('invalid');
            input.classList.remove('valid');
            isValid = false;
        } else {
            input.classList.add('valid');
            input.classList.remove('invalid');
        }
    });

    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
        formControls.forEach(input => input.classList.remove('valid'));
    } else {
        alert('Please fill out all fields correctly.');
    }
});

// Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const offset = 80; // Adjust this value based on the header height
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Dark mode toggle
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

// Modal functionality
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Add event listeners to project elements
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        const modalId = project.getAttribute('onclick').match(/'([^']+)'/)[1];
        openModal(modalId);
    });
});

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
});