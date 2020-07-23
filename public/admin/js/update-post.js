{
  let articlesBlock = document.querySelector(".articles");
  let updateForm = document.querySelector(".update-form");
  let titleImp = document.querySelector("#update-title-form");
  let decrImp = document.querySelector("#update-Message-form");
  let id;

  articlesBlock.addEventListener("click", async function (e) {
    if (e.target.classList.contains("edit-btn")) {
      id = e.target.parentNode.parentNode.querySelector(".id").value;
      let postInfo = await fetch("http://localhost:3000/posts/" + id)
        .then((response) => response.json())
        .then((data) => data);

      titleImp.value = postInfo.title;

      decrImp.value = postInfo.text;

      let articlesTab = document.getElementById("v-pills-articles");
      articlesTab.classList.remove("show");
      articlesTab.classList.remove("active");
      let updatePost = document.getElementById("v-pills-update-post");
      updatePost.classList.add("show");
      updatePost.classList.add("active");
    }
  });

  updateForm.addEventListener("submit", function (e) {
    e.preventDefault();
    fetch("http://localhost:3000/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleImp.value,
        text: decrImp.value,
        descripition: decrImp.value.substring(
          0,
          decrImp.value.indexOf(".") + 1
        ),
      }),
    })
      .then((response) => response.text())
      .then(() => window.history.go());
  });
}
