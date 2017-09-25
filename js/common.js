var link = document.querySelector(".login");
var popup = document.querySelector(".modal_content");
var close = document.querySelector(".modal_loginform_close");
var form = popup.querySelector("form");
var login = document.querySelector("[name=login]");
var password = document.querySelector("[name=password]");
var storage = localStorage.getItem("login");

var mapOpen = document.querySelector(".js_open_map");
var mapPopup = document.querySelector(".modal_content_map");
var mapClose = document.querySelector(".modal_map_close");

link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("modal_content_show");
  if(storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

mapOpen.addEventListener("click", function(event){
  event.preventDefault();
  mapPopup.classList.add("modal_content_show");
});

close.addEventListener("click", function(event){
  event.preventDefault();
  if (popup.classList.contains("modal_content_show")) {
    popup.classList.remove("modal_content_show");
    popup.classList.remove("modal_error");
  }
});

mapClose.addEventListener("click", function(event){
  event.preventDefault();
  if (mapPopup.classList.contains("modal_content_show")) {
    mapPopup.classList.remove("modal_content_show");
  }
});

form.addEventListener("submit", function() {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.add("modal_error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal_content_show")) {
      popup.classList.remove("modal_content_show");
      popup.classList.remove("modal_error");
    }
    if (mapPopup.classList.contains("modal_content_show")) {
      mapPopup.classList.remove("modal_content_show");
    }
  }
});