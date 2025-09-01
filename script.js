// Save users in localStorage (acts like a mini database in browser)
function registerUser() {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const message = document.getElementById("registerMessage");

    if (username === "" || password === "") {
        message.style.color = "red";
        message.textContent = "All fields are required!";
        return;
    }

    // Check if user already exists
    if (localStorage.getItem(username)) {
        message.style.color = "red";
        message.textContent = "User already exists. Try another username.";
    } else {
        localStorage.setItem(username, password);
        message.style.color = "green";
        message.textContent = "Registration successful! You can now login.";
    }
}

// Validate login
function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        message.style.color = "green";
        message.textContent = "Login successful! Redirecting...";

        // Redirect to profile page
        setTimeout(() => {
            window.location.href = "profile.html";
        }, 1000);
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
}

// Show logged in user details on profile.html
document.addEventListener("DOMContentLoaded", () => {
    const profileHeader = document.querySelector("header h2");
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (profileHeader && loggedInUser) {
        profileHeader.textContent = loggedInUser;
    }
});
