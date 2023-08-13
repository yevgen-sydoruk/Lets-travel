async function getPosts() {
  return await fetch("http://localhost:3000/posts")
    .then((res, req) => res.json())
    .then((data) => data);
}

document.addEventListener("DOMContentLoaded", async function () {
  let posts = await getPosts();
  let articles = document.querySelector(".landmarks");
  articles.innerHTML = "";
  posts.forEach((post) => {
    let postHTML = `
    <div class="col">
    <div class="card h-100">
      <img src='${post.imageURL}' class="card-img-top" alt='${post.title}' />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">
          ${post.description}
        </p>
        <button class="btn btn-primary mt-auto me-auto">Details</button>
      </div>
    </div>
  </div>
      `;
    articles.insertAdjacentHTML("beforeend", postHTML);
  });
});

let callMeForm = document.querySelector(".call-me-form");

callMeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let phoneInput = callMeForm.querySelector("input");
  fetch("http://localhost:3000/callback-requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phoneNumber: phoneInput.value,
    }),
  })
    .then((res) => res.text())
    .then(() => alert("We will call you back as soon as possible!"));
});

let contactUsForm = document.querySelector(".contact-us-form");

contactUsForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Clicked");
  let nameInput = contactUsForm.querySelector("#name");
  let emailInput = contactUsForm.querySelector("#email");
  let messageInput = contactUsForm.querySelector("#message");
  fetch("http://localhost:3000/email-requests", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      nameInput: nameInput.value,
      emailInput: emailInput.value,
      messageInput: messageInput.value,
    }),
  }).then((res) => res.text());
});
