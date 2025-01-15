 // JavaScript to handle form validation and redirection
 document.getElementById('signupButton').addEventListener('click', function () {
    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const errorField = document.getElementById('error');

    // Clear previous error messages
    errorField.textContent = '';
    // validate username
    const usernameValue = usernameField.value.trim();
    if (!usernameValue) {
        errorField.textContent = 'Username is required.';
        return;
    }


    // Validate email
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

    // Validate password
    const passwordValue = passwordField.value.trim();
    if (!passwordValue) {
        errorField.textContent = 'Password is required.';
        return;
    }
    if (passwordValue.length < 8) {
        errorField.textContent = 'Password must be at least 8 characters long.';
        return;
    }

    // Validate confirm password
    const confirmPasswordValue = confirmPasswordField.value.trim();
    if (!confirmPasswordValue) {
        errorField.textContent = 'Please confirm your password.';
        return;
    }
    if (passwordValue !== confirmPasswordValue) {
        errorField.textContent = 'Passwords do not match.';
        return;
    }

    // If all validations pass, redirect to login page
    window.location.href = "login.html";
});