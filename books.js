function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const bookTitle = document.getElementById("bookTitle");
    const bookAuthor = document.getElementById("bookAuthor");
    const quantity = document.getElementById("quantity");

    const errors = document.querySelectorAll(".error");
    errors.forEach(error => error.style.display = "none");

    let isValid = true;

    // Validate Name
    if (name.value.trim() === "") {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    }

    // Validate Phone
    if (!/^\d{10}$/.test(phone.value.trim())) {
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
    }

    // Validate Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    // Validate Book Title
    if (bookTitle.value.trim() === "") {
        document.getElementById("bookTitleError").style.display = "block";
        isValid = false;
    }

    // Validate Book Author
    if (bookAuthor.value.trim() === "") {
        document.getElementById("bookAuthorError").style.display = "block";
        isValid = false;
    }

    // Validate Quantity
    if (quantity.value.trim() === "" || isNaN(quantity.value) || parseInt(quantity.value) <= 0) {
        document.getElementById("quantityError").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // Add form submission logic here
    }
}