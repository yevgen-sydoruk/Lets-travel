async function getPosts() {
  return await fetch("http://localhost:3000/posts")
    .then((res, req) => res.json())
    .then((data) => data);
}

document.addEventListener("DOMContentLoaded", async function () {
  let posts = await getPosts();
  console.log(posts);
  let articles = document.querySelector(".articles-list tbody");
  articles.innerHTML = "";
  posts.forEach((post) => {
    console.log(post);
    let postHTML = `
    <tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.date}</td>
                    <td>${post.country}</td>
                    <td><button class="btn btn-link p-0 text-decoration-none">Edit</button></td>
                    <td><button class="btn btn-link p-0 text-decoration-none">X</button></td>
                  </tr>
    `;
    articles.insertAdjacentHTML("beforeend", postHTML);
  });
});
