document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
        // Add your form submission logic here
    });
});
