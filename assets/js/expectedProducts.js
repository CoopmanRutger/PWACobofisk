"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    FetchExpectedProducts(sessionStorage.getItem('storeId')).then(expectedProducts => AllExpectedProductsToHtml(expectedProducts, false));
    FetchProducts(sessionStorage.getItem('storeId')).then(products => ProductsToHtml(products));
    
    
    name();
};

function name() {
    let btn = document.getElementById("orderform");
    let modal = document.getElementById("orderformModal");

    btn.click = function() {
        modal.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

function ProductsToHtml(products) {
    let result = "";
    for (let product of products) {
        result += OrderformProductmaker(product);
    }
    document.getElementById("products").innerHTML = result;
}

function OrderformProductmaker({id, name, brand, size, color, amountMin, amountStock,}){
    if (amountFunction(amountMin, amountStock) > 0){
        return `<tr><th scope="row">${id}</th>
        <td>${name}</td>
        <td>${brand}</td>
        <td>${size}</td>
        <td>${color}</td>
        <td>${amountFunction(amountMin, amountStock)}</td>
        </tr>`
    }
    return '';
}




// function modal(){
//     document.getElementById("orderformModal")= ``;
// }

