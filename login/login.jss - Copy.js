// Simulated in-memory database
let userDB = {};

function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please fill in both fields.");
    return;
  }

  if (userDB[username]) {
    alert("Username already exists!");
  } else {
    userDB[username] = password;
    alert("User registered successfully!");
  }
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (userDB[username] && userDB[username] === password) {
    document.getElementById("auth-section").classList.add("hidden");
    document.getElementById("secure-page").classList.remove("hidden");
  } else {
    alert("Invalid username or password.");
  }
}

function logout() {
  document.getElementById("auth-section").classList.remove("hidden");
  document.getElementById("secure-page").classList.add("hidden");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
