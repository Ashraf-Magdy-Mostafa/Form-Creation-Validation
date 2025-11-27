document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom Loaded");

  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("user name must be greater than 3 characters");
    }
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push('email must include both "@" and "."');
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("password must be at least 8 characters");
    }
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
