"use strict";

let params = [];

document.addEventListener("DOMContentLoaded", init);

function init() {
    let storeId = sessionStorage.getItem('storeId')

    console.log({storeId})

    FetchProducts(sessionStorage.getItem('storeId')).then(products => ProductsToHtml(products));
    FetchOrderformStandaard(sessionStorage.getItem('storeId')).then(products => applicationForm(products));
    document.querySelector("#send").addEventListener("click",clickedOnSend);
};

function ProductsToHtml(products) {
    let result = "";
    for (let product of products) {
        result += OrderformProductmaker(product);
    }
    document.getElementById("orderFormProducts").innerHTML = result;
}

function applicationForm(products) {
    let result = "";
    for (let product of products) {
        result += OrderformProductmaker2(product);
    }
    document.getElementById("applicationFormProducts").innerHTML = result;
}

function OrderformProductmaker({ id, name, brand, size, color, amountMin, amountStock, }) {
    // todo
    if (amountFunction(amountMin, amountStock) > 0) {
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

function OrderformProductmaker2({ id, name, brand, size, color, amountMin, amountStock, }) {
        return `<tr><th scope="row">${id}</th>
        <td>${name}</td>
        <td>${brand}</td>
        <td>${size}</td>
        <td>${color}</td>
        <td>${amountFunction(amountMin, amountStock)}</td>
        </tr>`
}

function getIdAndAmountOfTheProducts(id) {
    let products = document.getElementById(id).children;
    
    for (const product of products) {
        let aProduct = {}; 
        
        aProduct.id = product.children[0].innerHTML;
        aProduct.amount = product.children[5].innerHTML;
        aProduct.storeId = sessionStorage.getItem('storeId');

        params.push(aProduct);
        
        console.log(aProduct);
        PostProductToDeliveryNote(aProduct);
    }
}


function clickedOnSend() {
    console.log("clicked");
    getIdAndAmountOfTheProducts("orderFormProducts");
    getIdAndAmountOfTheProducts("applicationFormProducts");
}