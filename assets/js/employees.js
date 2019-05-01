"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("blabla");
    FetchEmployees(sessionStorage.getItem('storeId')).then(employees => AllEmployeeToHtml(employees, false));
    
};


