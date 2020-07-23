let signIn = document.querySelector(".signIn");
let RegisterIn = document.querySelector(".Register");

signIn.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("sign-in-form").value;
  let password = document.getElementById("sign-in-password").value;
  fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((resp) => {
      if (resp.status === 400) {
        throw new Error();
      }

      return resp.json();
    })
    .then((data) => {
      window.location.href = data.redirectURL;
    })
    .catch(() => alert("wrong email & password"));
});

RegisterIn.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("Register-form").value;
  let password = document.getElementById("Register-password").value;
  let RePassword = document.getElementById("Reenter-password").value;
  if (password !== RePassword) {
    return;
  }
  fetch("http://localhost:3000/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((resp) => resp.text())
    .then((data) => alert(data));
});
