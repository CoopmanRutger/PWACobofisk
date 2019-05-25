"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("#login").addEventListener("click", Clicked);
    document.querySelector("#warning").classList.add("hide");
    RegisterSW();
}

function Clicked(e) {
  e.preventDefault();
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  PostLogin(username, password).then(id => id.text()).then(res => CorrectLogin(res));
}

function CorrectLogin(storeId) {
  if (storeId != 0) {
    sessionStorage.setItem("storeId", storeId);
    window.location.href = "http://127.0.0.1:5500/general.html";
  } else {
    document.getElementById("warning").classList.remove("hide");
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
