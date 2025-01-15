 // JavaScript Form Validation and Redirect
 document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission early

    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const errorField = document.getElementById('error');

    // Clear previous error messages
    errorField.textContent = '';

    // Validate email (check if not empty and valid format)
    const emailValue = emailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
        errorField.textContent = 'Email is required.';
        return;
    }
    if (!emailRegex.test(emailValue)) {
        errorField.textContent = 'Please enter a valid email address.';
        return;
    }

    // Validate password (check if not empty)
    const passwordValue = passwordField.value.trim();
    if (!passwordValue) {
        errorField.textContent = 'Password is required.';
        return;
    }

    // Redirect to index.html on successful validation
    window.location.href = "index.html";
});