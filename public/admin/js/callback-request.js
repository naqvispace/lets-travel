async function getcallbackRequest() {
  return await fetch("http://localhost:3000/callback-request")
    .then((response) => response.json())
    .then((data) => data);
}

let requestsBlock = document.querySelector("#pills-callback");

requestsBlock.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    let id = e.target.parentNode.parentNode.querySelector(".id").value;
    fetch("http://localhost:3000/callback-request/" + id, {
      method: "DELETE",
    })
      .then((response) => response.text)
      .then(() => window.history.go());
  }
});
