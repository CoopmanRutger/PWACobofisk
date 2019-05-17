"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    sessionStorage.setItem('storeId', 1);
    console.log(sessionStorage.getItem('storeId'));
    document.querySelector("#login").addEventListener("click",clicked);
    registerSW();
  };
  
  
  function clicked() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    
    let id = PostLogin({ username: username, password: password})
    console.log(id);
    // if (id != 0) {
      // sessionStorage.setItem('id', id);
      // console.log(sessionStorage.getItem('id'));
    // window.location.href = "http://127.0.0.1:5500/general.html";
  // } else {
    // window.location.href = "http://127.0.0.1:5500/indexW.html";
  // }
}

function registerSW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("/sw.js").then(function(res) {
            console.log("Successfully registered service worker with scope: ", res.scope);
        }).catch(function(err) {
            console.log("Error registering service worker ", err);
        }) 
    }
}