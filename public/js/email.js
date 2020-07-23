let emailrequestForm = document.querySelector(".emailForm");

emailrequestForm.addEventListener("submit", function (e) {
  e.preventDefault();
  fetch("http://localhost:3000/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: document.querySelector("#Name").value,
      email: document.querySelector("#Email").value,
      message: document.querySelector("#emessage").value,
    }),
  })
    .then((response) => response.text())
    .then((data) => console.log(data));
});
