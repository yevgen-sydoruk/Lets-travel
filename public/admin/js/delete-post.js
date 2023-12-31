{
  let articlesBlock = document.querySelector(".articles-list");

  articlesBlock.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      let id = e.target.parentNode.parentNode.querySelector(".id").value;
      fetch("/posts/" + id, {
        method: "DELETE",
      })
        .then((res) => res.text())
        .then(() => window.history.go());
    }
  });
}
