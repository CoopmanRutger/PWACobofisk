"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    sessionStorage.setItem('storeId', 1);
    console.log(sessionStorage.getItem('storeId'));
};