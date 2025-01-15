function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const quantity = document.getElementById("quantity");
    const errors = document.querySelectorAll(".error");

    // Clear previous error messages
    errors.forEach(error => error.style.display = "none");

    let isValid = true;

    if (name.value.trim() === "") {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    }

    if (!/^\d{10}$/.test(phone.value.trim())) {
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    if (address.value.trim() === "") {
        document.getElementById("addressError").style.display = "block";
        isValid = false;
    }

    if (quantity.value.trim() === "" || isNaN(quantity.value) || parseInt(quantity.value) <= 0) {
        document.getElementById("quantityError").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // Form submission logic goes here
    }
}