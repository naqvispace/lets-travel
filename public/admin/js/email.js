async function getEmail() {
  return await fetch("http://localhost:3000/email")
    .then((response) => response.json())
    .then((data) => data);
}

let emailBlock = document.querySelector("#v-pills-mails");

emailBlock.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    let id = e.target.parentNode.parentNode.querySelector(".id").value;
    fetch("http://localhost:3000/email/" + id, {
      method: "DELETE",
    })
      .then((response) => response.text)
      .then(() => window.history.go());
  }
});
