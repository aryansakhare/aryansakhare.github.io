// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Optional Form Validation (if you want it)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');

        // Simple validation to check if fields are filled
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            alert('Please fill in all the fields.');
            e.preventDefault(); // Prevent form submission
        }
    });
}
