"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    let storeId = sessionStorage.getItem('storeId');
    FetchExpectedProducts(storeId).then(expectedProducts => AllExpectedProductsToHtml(expectedProducts, false));
};

