"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    FetchProducts(sessionStorage.getItem('storeId')).then(products => AllProductToHtml(products, true));
    FetchExpectedProducts(sessionStorage.getItem('storeId')).then(expectedProducts => AllExpectedProductsToHtml(expectedProducts, true));
    FetchEmployees(sessionStorage.getItem('storeId')).then(employees => AllEmployeeToHtml(employees, true));
};  

