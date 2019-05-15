"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    FetchEmployees(sessionStorage.getItem('storeId')).then(employees => AllEmployeeToHtml(employees, false));
};


