"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    FetchProducts(sessionStorage.getItem('storeId')).then(products => AllProductToHtml(products, false));  
};

function AllButtons(products) {
    let buttons = document.querySelectorAll(".buttons");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (e) {
            ModalHtml(products[i]);
            ModalJs();
            document.getElementById('myModal').style.display = "block";
        });
    }
}