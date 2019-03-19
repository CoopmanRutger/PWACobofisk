"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    fetchEmployee().then(employees => allEmployeeToHtml(employees, true));
    fetchProducts().then(products => allProductToHtml(products, true));

};  

