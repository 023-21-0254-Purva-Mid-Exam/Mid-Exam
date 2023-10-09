// Define the correct password (you should securely store this on the server)
const correctPassword = "cafe-owner";

// Function to handle the form submission
document.getElementById("admin-login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const passwordInput = document.getElementById("password").value;

    // Check if the entered password matches the correct password
    if (passwordInput === correctPassword) {
        // Redirect to the admin dashboard or perform desired actions
        window.location.href = "admin-dashboard.html";
    } else {
        // Display an error message if the password is incorrect
        alert("Incorrect password. Please try again.");
    }
});
