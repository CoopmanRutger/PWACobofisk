const domain = "https://local.project/api/";
const header = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
        "Content-Type": "application/json",
    },
};

function FetchProducts(storeId){
    url = `${domain}stores/products/${storeId}`
    return fetch(url , header)
    .then(function (response) {
        return response.json();
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
      });
}

function FetchExpectedProducts(id){
    url = `${domain}stores/deliverynotes/${id}`
    return fetch(url , header)
    .then(function (response) {
        return response.json();
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
      });
}


function FetchEmployees(storeId){
    url = `${domain}stores/employees/${storeId}`  //todo: per winkel!
    return fetch(url , header)
    .then(function (response) {
        return response.json();
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
      });
}



function FetchProductsById(id){
    url = `${domain}products/${id}`
    return fetch(url , header)
    .then(function (response) {
        return response.json();
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
      });
}

// fetch("https://local.project/Auth/register", {
//         method: 'post',
//         credentials: "same-origin",
//         body: new FormData(document.getElementById('form'))
//       }).then(function(response){
//             return response.json();
//         })  .then(function(json){   
 
//           // change course
 
//         })
//           .catch(function(error){
 
 
//           });

// fetch(url + "project/", header)
//     .then((resp) => resp.json())
//     .then(function (data) {
//         console.log(data);
//         let authors = data.results;
//         console.log(authors)
//     })
//     .catch(function(error) {
//         console.log(JSON.stringify(error));
//       });   ;