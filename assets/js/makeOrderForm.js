"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    let storeId = sessionStorage.getItem('storeId');
    FetchProducts(storeId).then(products => ProductsToHtml(products));
    FetchOrderformStandaard(storeId).then(products => ApplicationForm(products));

    document.querySelector("#send").addEventListener("click",ClickedOnSend);
};

function ProductsToHtml(products) {
    let result = "";
    for (let product of products) {
        result += OrderformProductRowMaker(product);
    }
    document.getElementById("orderFormProducts").innerHTML = result;
}

function ApplicationForm(products) {
    let result = "";
    for (let product of products) {
        result += ApplicationFormProductRowMaker(product);
    }
    document.getElementById("applicationFormProducts").innerHTML = result;
}

function OrderformProductRowMaker({ id, name, brand, size, color, amountMin, amountStock, }) {
    // todo
    if (AmountFunction(amountMin, amountStock) > 0) {
        return `<tr>`
        + th(id)
        + td(size)
        + td(name)
        + td(brand) 
        + td(color)
        + td(AmountFunction(amountMin, amountStock)) 
        + `</tr>`
    }
    return '';
}

function ApplicationFormProductRowMaker({ productId, name, brand, size, color, amount}) {
    // todo
        return `<tr>`
        + th(productId)
        + td(size)
        + td(name)
        + td(brand)
        + td(color)
        + td(amount)
        + `</tr>`
}

function GetIdAndAmountOfTheProducts(id, boolean) {
    let products = document.getElementById(id).children;
    const arrayOfPostPromises = Array.from(products).map(product => {
        let aProduct = ProductToProduct(product, boolean);
       
        return PostProductToDeliveryNote(aProduct);
    })
    return Promise.all(arrayOfPostPromises);
}

function ProductToProduct(product, boolean) {
    let aProduct = {}; 
    aProduct.id = product.children[0].innerHTML;
    aProduct.amount = product.children[5].innerHTML;
    aProduct.storeId = sessionStorage.getItem('storeId');
    aProduct.extra = ExtraText(boolean);

    return aProduct;
}

function ExtraText(boolean){
    if(boolean){
        return "AUTOMATISCHE BESTELLING (min stock)";
    }else {
        return document.getElementById("choice").value.toUpperCase() +': '
        + document.getElementById("extra").value;
    }
}

function DeleteOrderformProducts() {
    // todo delet form orderforms
    return true;
    }

function ClickedOnSend() {
    Promise.all([
        GetIdAndAmountOfTheProducts("orderFormProducts", true),
        GetIdAndAmountOfTheProducts("applicationFormProducts", false),
        DeleteOrderformProducts("applicationFormProducts")
    ]).then(GoTo);
}

function GoTo() {
    window.location.href = "http://127.0.0.1:5500/orderForms.html";
}

    