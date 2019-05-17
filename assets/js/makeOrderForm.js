"use strict";

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
        result += ApplicationFormProductmaker(product);
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

function ApplicationFormProductmaker({ productId, name, brand, size, color, amount}) {
        return `<tr><th scope="row">${productId}</th>
        <td>${name}</td>
        <td>${brand}</td>
        <td>${size}</td>
        <td>${color}</td>
        <td>${amount}</td>
        </tr>`
}

function getIdAndAmountOfTheProducts(id, boolean) {
    let products = document.getElementById(id).children;
    
    for (const product of products) {
        let aProduct = {}; 
        aProduct.id = product.children[0].innerHTML;
        aProduct.amount = product.children[5].innerHTML;
        aProduct.storeId = sessionStorage.getItem('storeId');
        if(boolean){
            aProduct.extra = "AUTOMATISCHE BESTELLING (min stock)";
        }else {
            aProduct.extra = document.getElementById("choice").value.toUpperCase() +': '
            + document.getElementById("extra").value;
        }
        
        PostProductToDeliveryNote(aProduct);
    }
}


function clickedOnSend() {
    console.log("clicked");
    let promise1 = new Promise(function(resolve, reject ) {
        getIdAndAmountOfTheProducts("orderFormProducts", true)});
    let promise2 = new Promise(function(resole, reject ) {
        getIdAndAmountOfTheProducts("applicationFormProducts", false)});
    // var promise3 = new Promise(function(resolve, reject) {
    //     setTimeout(resolve, 100, 'foo');

    Promise.all([promise1, promise2]).then(goTo);       
}

function goTo() {
    window.location.href = "http://127.0.0.1:5500/orderForms.html";
}