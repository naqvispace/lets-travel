let postBtn = document.querySelector(".create-post-btn");
let logOutBtn = document.querySelector(".btn-logout");

document.addEventListener("DOMContentLoaded", async function () {
  addPosts();
  callbackRequest();
  addEmails();
});

postBtn.addEventListener("click", function () {
  let articlesTab = document.getElementById("v-pills-articles");
  articlesTab.classList.remove("show");
  articlesTab.classList.remove("active");
  let createTab = document.getElementById("create-post");
  createTab.classList.add("show");
  createTab.classList.add("active");
});

async function addPosts() {
  let posts = await getPosts();
  let articles = document.querySelector(".articles");
  articles.innerHTML = "";

  let i = 1;
  posts.forEach((post) => {
    let postHTML = `<article class="d-flex justify-content-between align-items-center articles-inline">
    <div class="num w5">${i++}</div>
    <input class="id" type="hidden" value="${post.id}">
    <div class="name w30">${post.title}</div>
    <div class="add w30">${post.date}</div>
    <div class="country w20">${post.country}</div>
    <div class="edit w10"><button class="btn btn-link edit-btn">Edit</button></div>
    <div class="remove w5"><button class="btn btn-link del-btn">X</button></div>
  </article>`;

    articles.insertAdjacentHTML("beforeend", postHTML);
  });
}

async function callbackRequest() {
  let requests = await getcallbackRequest();
  let requestBlock = document.querySelector("#pills-callback");
  requestBlock.innerHTML = "";

  let i = 1;
  requests.forEach((request) => {
    let requestHTML = `<article class="d-flex justify-content-between align-items-center articles-inline">
    <div class="num w5">${i++}</div>
    <input class="id" type="hidden" value="${request.id}">
    <div class="name w60">${request.phoneNumber}</div>
    <div class="add w30">${request.date}</div>
  
    <div class="remove w5"><button class="btn btn-link remove-btn">X</button></div>
  </article>`;

    requestBlock.insertAdjacentHTML("beforeend", requestHTML);
  });
}

async function addEmails() {
  let requests = await getEmail();
  let requestBlock = document.querySelector("#v-pills-mails");
  requestBlock.innerHTML = "";

  let i = 1;
  requests.forEach((request) => {
    let requestHTML = `<article class="d-flex justify-content-between align-items-center articles-inline">
    <div class="num w5">${i++}</div>
    <input class="id" type="hidden" value="${request.id}">
    <div class="name w30">${request.name}</div>
    <div class="email w30">${request.email}</div>
    <div class="date w30">${request.date}</div>
    
    <div class="remove w5"><button class="btn btn-link remove-btn">X</button></div>
    <div class="message w100">${request.message}</div>
  </article>`;

    requestBlock.insertAdjacentHTML("beforeend", requestHTML);
  });
}

logOutBtn.addEventListener("click", function () {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
  window.location.href = "/";
});
