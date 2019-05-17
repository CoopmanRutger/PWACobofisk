const domain = "https://local.project/api/";
const getHeader = {
    method: "GET", 
    headers: {
        "Content-Type": "application/json",
    },
};

// get requests
function getRequest(url) {
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
    return getRequest(url);
}

function FetchExpectedProducts(id) {
    url = `${domain}stores/deliverynotes/${id}`
    return getRequest(url);
}

function FetchEmployees(storeId) {
    url = `${domain}stores/employees/${storeId}`
    return getRequest(url);
}

function FetchOrderformStandaard(storeId) {
    url = `${domain}products/orderform/${storeId}`
    return getRequest(url);
}

function FetchProductsById(id) {
    url = `${domain}products/${id}`
    return getRequest(url);
}

// post requests
function postRequest(url, params) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(params),
        headers:{
          'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(res => console.log(res))
}

function PostProductDelAmount(id, amount) {
    let url = `${domain}products/${id}?_method=PUT`;
    postRequest(url, { amount: amount, choice: "Del" });
}

function PostProductAddAmount(id, amount) {
    let url = `${domain}products/${id}?_method=PUT`;
    postRequest(url, { amount: amount, choice: "Add" });
}

function PostProductToDeliveryNote(params) {
    url = `${domain}deliverynotes/add`;
    postRequest(url, params);
}

function PostLogin(params) {
    url = `${domain}employees/login`;
    postRequest(url, params);
}


// function PostProductOrder(params) {
//     url = `${domain}products/${id}`
//     return fetch(url, {
//         method: "POST",
//         body: new FormData(document.getElementById('form'))
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .catch(function (error) {
//             console.log(JSON.stringify(error));
//         });
// }
