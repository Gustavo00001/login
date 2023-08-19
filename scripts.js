
const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginTab.addEventListener("click", () => {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

registerTab.addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});