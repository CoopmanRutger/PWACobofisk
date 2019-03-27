"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    FetchExpectedProducts(sessionStorage.getItem('storeId')).then(expectedProducts => AllExpectedProductsToHtml(expectedProducts, false));
};


function clickedOnButton() {
    let buttons = document.querySelectorAll(".buttons");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (e) {
            // todo bugske
            FetchProductsById(buttons[i].value).then(product => ModalHtml(product)).then(ModalJs());
            document.getElementById('myModal').style.display = "block";
        });
    }
}
