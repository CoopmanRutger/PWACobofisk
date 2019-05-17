"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    FetchExpectedProducts(sessionStorage.getItem('storeId')).then(expectedProducts => AllExpectedProductsToHtml(expectedProducts, false));
};

