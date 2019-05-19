const domain = "https://local.project/api/";
const getHeader = {
    method: "GET", 
    headers: {
        "Content-Type": "application/json",
    },
};

// get requests
function GetRequest(url) {
    return fetch(url, getHeader)
    .then(function (response) {
        return response.json();
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });
}

function FetchProducts(storeId) {
    url = `${domain}stores/products/${storeId}`
    return GetRequest(url);
}

function FetchExpectedProducts(id) {
    url = `${domain}stores/deliverynotes/${id}`
    return GetRequest(url);
}

function FetchEmployees(storeId) {
    url = `${domain}stores/employees/${storeId}`
    return GetRequest(url);
}

function FetchOrderformStandaard(storeId) {
    url = `${domain}products/orderform/${storeId}`
    return GetRequest(url);
}

function FetchProductsById(id) {
    url = `${domain}products/${id}`
    return GetRequest(url);
}

// post requests
function PostRequest(url, params) {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(params),
        headers:{
          'Content-Type': 'application/json'
        }
    }).then(res => res);
    // .then(res => res.json);    
}

function PostProductDelAmount(id, amount) {
    let url = `${domain}products/${id}?_method=PUT`;
    return PostRequest(url, { amount: amount, choice: "Del" });
}

function PostProductAddAmount(id, amount) {
    let url = `${domain}products/${id}?_method=PUT`;
    return PostRequest(url, { amount: amount, choice: "Add" });
}

function PostProductToDeliveryNote(params) {
    url = `${domain}deliverynotes/add`;
    return PostRequest(url, params);
}

function PostLogin(username, password) {
    url = `${domain}employees/login`;
    return PostRequest(url, {username: username, password: password});
}