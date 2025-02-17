document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        let isValid = true;
        clearErrors();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '') {
            isValid = false;
            showError('name', 'Name is required');
        }

        if (!email.includes('@') || !email.includes('.')) {
            showError('email', 'Enter a valid email');
        }

        if (!message.toLowerCase().includes('please')) {
            isValid = false;
            showError('message', 'Message must include "please"');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = message;
        field.insertAdjacentElement('afterend', error);
        field.style.borderColor = 'red';
    }

    function clearErrors() {
        document.querySelectorAll('.error').forEach(el => el.remove());
        document.querySelectorAll('input, textarea').forEach(el => el.style.borderColor = '');
    }
});