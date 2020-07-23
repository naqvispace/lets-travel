let callmeForm = document.querySelector(".call-me-form");

document.addEventListener("DOMContentLoaded", async function () {
  let posts = await getPosts();
  let articles = document.querySelector(".articles");
  articles.innerHTML = "";

  posts.forEach((post) => {
    let postHTML = `<div class="col-4">
		<div class="card">
			<img src="${post.imageURL}" alt="${post.title}"></img>
			<div class="card-body">
				<h4 class="card-title">${post.title}</h4>
        <p class="card-text">"${post.descripition}"</p>
        <a href="/sight?id=${post.id}" class="btn btn-primary">Details</a>
			</div>
		</div>
</div>`;

    articles.insertAdjacentHTML("beforeend", postHTML);
  });
});

callmeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let phoneImp = callmeForm.querySelector("input");
  fetch("http://localhost:3000/callback-request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phoneNumber: phoneImp.value,
    }),
  })
    .then((resp) => resp.text())
    .then(() => alert("We will call you back soon..."));
});
