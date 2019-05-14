const domain = "https://local.project/api/";
const header = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
        "Content-Type": "application/json",
    },
};
const headerPost = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
}
const headerPUT = {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
}


function FetchProducts(storeId) {
    url = `${domain}stores/products/${storeId}`
    return fetch(url, header)
        .then(function (response) {
            return response.json();
        })
        // .catch(function (error) {
        //     console.log(JSON.stringify(error));
        // });
}

function FetchExpectedProducts(id) {
    url = `${domain}stores/deliverynotes/${id}`
    return fetch(url, header)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
}


function FetchEmployees(storeId) {
    url = `${domain}stores/employees/${storeId}`
    return fetch(url, header)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
}


function FetchOrderformStandaard(storeId) {
    url = `${domain}products/orderform/${storeId}`
    return fetch(url, header)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
}


function FetchProductsById(id) {
    url = `${domain}products/${id}`
    return fetch(url, header)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
}


function PostProductOrder(params) {
    url = `${domain}products/${id}`
    return fetch(url,{
        method: "POST",
        body: new FormData(document.getElementById('form'))
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
}


function PostProductDelAmount(id, amount) {
    let url = `${domain}products/${id}?_method=PUT`;
    post(url, {amount:amount, choice:"Del"});
}

function PostProductAddAmount(id, amount) {
    let url = `${domain}products/${id}?_method=PUT`;
    post(url, {amount:amount, choice:"Add"});
}

function PostProductToDeliveryNote(params) {
    url = `${domain}deliverynotes/add`;
    post(url, params);
}


function post(path, params, method='post') {
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = params[key];
  
        form.appendChild(hiddenField);
      }
    }
    // console.log(form);
    document.body.appendChild(form);
    form.submit();
  }
