let signInForm = document.querySelector(".sign-in-form");
let registerForm = document.querySelector(".register-form");
signInForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.querySelector("#sign-in-email").value;
  let password = document.querySelector("#sign-in-password").value;
  fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      let redirectURL = data.redirectURL;
      if (redirectURL) {
        window.location.href = redirectURL;
      } else {
        alert("Your password and email do not match. Please try again");
      }
    });
});
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.querySelector("#register-email").value;
  let password = document.querySelector("#register-password").value;
  let repassword = document.querySelector("#register-re-enter-password").value;
  if (password != repassword) {
    alert("password does not match!");
    return;
  }
  fetch("http://localhost:3000/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
