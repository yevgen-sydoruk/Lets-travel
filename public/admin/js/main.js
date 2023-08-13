async function getPosts() {
  return await fetch("http://localhost:3000/posts")
    .then((res, req) => res.json())
    .then((data) => data);
}

async function getCallbackRequests() {
  return await fetch("http://localhost:3000/callback-requests")
    .then((res, req) => res.json())
    .then((data) => data);
}

async function getEmailsRequests() {
  return await fetch("http://localhost:3000/email-requests")
    .then((res, req) => res.json())
    .then((data) => data);
}

document.addEventListener("DOMContentLoaded", async function () {
  addPosts();
  addCallbackRequests();
  addEmailRequests();

  let addPostBtn = document.querySelector(".add-post");
  let createPostBtn = document.querySelector("#v-pills-add-post-tab");
  addPostBtn.addEventListener("click", () => createPostBtn.click());
});

async function addPosts() {
  let posts = await getPosts();
  let articles = document.querySelector(".articles-list tbody");
  articles.innerHTML = "";
  let i = 1;
  posts.forEach((post) => {
    let postHTML = `
    <tr>
                    <td>${i++}<input class="id" type="hidden" value="${post.id}"></td>
                    <td class="title" >${post.title}</td>
                    <td class="date">${post.date}</td>
                    <td class="country">${post.country}</td>
                    <td><button class="edit-btn btn btn-link p-0 text-decoration-none">Edit</button></td>
                    <td><button class="remove-btn btn btn-link p-0 text-decoration-none">X</button></td>
                  </tr>
    `;
    articles.insertAdjacentHTML("beforeend", postHTML);
  });
}

async function addCallbackRequests() {
  let requests = await getCallbackRequests();
  let callbacksBlock = document.querySelector(".callback-requests-list tbody");
  callbacksBlock.innerHTML = "";
  let i = 1;
  requests.forEach((request) => {
    let requestHTML = `
    <tr>
                    <td>${i++}<input class="id" type="hidden" value="${request.id}"></td>
                    <td class="title" >${request.phoneNumber}</td>
                    <td class="date">${request.date}</td>
                    <td><button class="remove-btn btn btn-link p-0 text-decoration-none">X</button></td>
                  </tr>
    `;
    callbacksBlock.insertAdjacentHTML("beforeend", requestHTML);
  });
}

async function addEmailRequests() {
  let requests = await getEmailsRequests();
  let emailsBlock = document.querySelector(".email-requests-list tbody");
  emailsBlock.innerHTML = "";
  let i = 1;
  requests.forEach((request) => {
    let requestHTML = `
      <tr>
                    <td>${i++}<input class="id" type="hidden" value="${request.id}"></td>
                    <td class="name" >${request.name}</td>
                    <td class="email" >${request.email}</td>
                    <td class="message" >${request.message}</td>
                    <td class="date">${request.date}</td>
                    <td><button class="remove-btn btn btn-link p-0 text-decoration-none">X</button></td>
                  </tr>`;
    emailsBlock.insertAdjacentHTML("beforeend", requestHTML);
  });
}

let requestsBlock = document.querySelector("#v-pills-requests");

requestsBlock.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    let id = e.target.parentNode.parentNode.querySelector(".id").value;
    fetch("http://localhost:3000/callback-requests/" + id, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then(() => window.history.go());
  }
});

let emailsBlock = document.querySelector("#v-pills-mails");

emailsBlock.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    let id = e.target.parentNode.parentNode.querySelector(".id").value;
    fetch("http://localhost:3000/email-requests/" + id, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then(() => window.history.go());
  }
});
