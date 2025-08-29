let users = JSON.parse(localStorage.getItem("users")) || {};

function registerUser() {
  const newUsername = document.getElementById("newUsername").value;
  const newPassword = document.getElementById("newPassword").value;
  const registerMessage = document.getElementById("registerMessage");
  
  if (newUsername in users) {
    registerMessage.style.color = "red";
    registerMessage.innerText = "Username already exists!";
    return;
  }
  
  users[newUsername] = newPassword;
  localStorage.setItem("users", JSON.stringify(users));
  registerMessage.style.color = "green";
  registerMessage.innerText = "Registration successful! Redirecting to login...";
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
}

function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");
  
  if (users[username] && users[username] === password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "profile.html";
  } else {
    message.style.color = "red";
    message.innerText = "Invalid username or password!";
  }
}

function logout() {
  alert("You have been logged out!")
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

window.onload = function() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const profileUsername = document.getElementById("profileUsername");
    if (profileUsername) {
      profileUsername.innerText = loggedInUser;
    }
  } else if (window.location.pathname.includes("profile.html")) {
    window.location.href = "login.html";
  }
};
