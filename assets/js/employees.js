"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    let storeId = sessionStorage.getItem('storeId');
    FetchEmployees(storeId).then(employees => AllEmployeeToHtml(employees, false));
};
