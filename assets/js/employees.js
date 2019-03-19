"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("blabla");
    fetchEmployee().then(employees => allEmployeeToHtml(employees, false));
    
};


