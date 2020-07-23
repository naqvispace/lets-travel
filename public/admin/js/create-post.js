let createForm = document.querySelector(".create-form");
let createTitle = document.querySelector("#title-form");
let createCountry = document.querySelector("#country-form");
let createImage = document.querySelector("#Image-form");
let createMessage = document.querySelector("#Message-form");
let imageSelect = document.querySelector("#Image-file-choose");

createForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let text = createMessage.value;
  let data = new FormData();
  data.append("title", createTitle.value);
  data.append("country", createCountry.value);
  data.append("imageUrl", createImage.value);
  data.append("text", text);
  data.append("descripition", text.substring(0, text.indexOf(".") + 1));
  data.append("imageFile", imageSelect.files[0]);
  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: data,
  })
    .then((response) => response.text())
    .then((data) => window.history.go());
});

function inputdisabled(input1, input2) {
  if (input1.value) {
    input2.disabled = true;
  } else {
    input2.disabled = false;
  }
}

createImage.addEventListener("change", function () {
  inputdisabled(this, imageSelect);
});
imageSelect.addEventListener("change", function () {
  inputdisabled(this, createImage);
});
