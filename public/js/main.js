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
