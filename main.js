// main.js

document.addEventListener('DOMContentLoaded', function () {
    // Subscription button click event
    document.getElementById('subscribeBtn').addEventListener('click', function () {
        alert('Thank you for subscribing!');
    });

    // Login modal functionality
    const loginModal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeBtn = document.getElementById('closeBtn');

    // Display login modal
    loginBtn.addEventListener('click', function () {
        loginModal.style.display = 'block';
    });

    // Close login modal
    closeBtn.addEventListener('click', function () {
        loginModal.style.display = 'none';
    });

    // Close login modal if clicked outside of it
    window.addEventListener('click', function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
});
