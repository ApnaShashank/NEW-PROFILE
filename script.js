// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Image upload functionality (for profile and portfolio)
document.getElementById('image-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            const uploadedImageDiv = document.getElementById('uploaded-image');
            uploadedImageDiv.innerHTML = ''; // Clear previous image
            uploadedImageDiv.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

// Profile image update
const profileImg = document.getElementById('profile-img');
const mcdonaldImg = document.getElementById('mcdonald-img');

profileImg.src = 'https://i.imgur.com/DF76M6h.jpg'; // Shashank Gupta's profile image
mcdonaldImg.src = 'https://i.imgur.com/9l6zZfS.jpg'; // Shashank with Ronald McDonald

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I’ll get back to you soon at ' + email + '.');
        this.reset();
    }
});

// Toggle phone number visibility
const togglePhone = document.getElementById('toggle-phone');
const phoneNumber = document.getElementById('phone-number');

togglePhone.addEventListener('click', function() {
    if (phoneNumber.classList.contains('hidden')) {
        phoneNumber.classList.remove('hidden');
        phoneNumber.classList.add('visible');
        togglePhone.textContent = 'Hide Phone';
    } else {
        phoneNumber.classList.remove('visible');
        phoneNumber.classList.add('hidden');
        togglePhone.textContent = 'Show Phone';
    }
});

// Add animation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});