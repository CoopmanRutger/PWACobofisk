"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    sessionStorage.setItem('storeId', 1);
    document.querySelector("#login").addEventListener("click",clicked);
    RegisterSW();
}

function Clicked() {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  PostLogin(username, password).then(id => console.log(id));
}

function WelWel(id) {
  console.log(id);
  if (id != 0) {
    sessionStorage.setItem("id", id);
    console.log(sessionStorage.getItem("id"));
    window.location.href = "http://127.0.0.1:5500/general.html";
  } else {
    window.location.href = "http://127.0.0.1:5500/index.html";
  }
}

function RegisterSW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("/sw.js").then(function(res) {
            console.log("Successfully registered service worker with scope: ", res.scope);
        }).catch(function(err) {
            console.log("Error registering service worker ", err);
        })
    }
}
