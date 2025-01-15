function generateUPIQRCode() {
    const amount = document.getElementById("amount").value.trim();
    const upiId = "gauravsonar260-1@okaxis"; // Replace with your UPI ID

    // Validate the donation amount
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    // Construct the UPI Payment URL
    const upiUrl = `upi://pay?pa=${upiId}&pn=Donor&tn=Donation&am=${amount}&cu=INR`;

    // Clear previous QR code if any
    document.getElementById("qrcode").innerHTML = "";

    // Generate the UPI QR code
    new QRCode(document.getElementById("qrcode"), {
        text: upiUrl,
        width: 200,
        height: 200,
    });
}

function submitDonation(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const amount = document.getElementById("amount");
    const governmentId = document.getElementById("governmentId");
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

    if (amount.value.trim() === "" || isNaN(amount.value) || parseFloat(amount.value) <= 0) {
        document.getElementById("amountError").style.display = "block";
        isValid = false;
    }

    // Check if Government ID proof is provided
    if (!governmentId.files.length) {
        document.getElementById("governmentIdError").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // Form submission logic goes here
    }
}