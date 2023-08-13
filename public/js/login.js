let signInForm = document.querySelector(".sign-in-form");
let registerForm = document.querySelector(".registerForm-form");

signInForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.querySelector("#sign-in-email").value;
  let password = document.querySelector("#sign-in-password").value;
});
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.querySelector("#register-email").value;
  let password = document.querySelector("#register-password").value;
  let repassword = document.querySelector("#register-re-enter-password").value;
});
