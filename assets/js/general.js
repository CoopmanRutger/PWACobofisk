"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    let storeId = sessionStorage.getItem('storeId');
    FetchProducts(storeId).then(products => AllProductToHtml(products, true));
    FetchExpectedProducts(storeId).then(expectedProducts => AllExpectedProductsToHtml(expectedProducts, true));
    FetchEmployees(storeId).then(employees => AllEmployeeToHtml(employees, true));
};  
