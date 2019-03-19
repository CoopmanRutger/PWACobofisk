const domain = "https://local.project/api/";
const header = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
        "Content-Type": "application/json",
    },
};

function fetchProducts(){
    url = `${domain}product/`
    return fetch(url , header)
    .then(function (response) {
        return response.json();
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
      });

}


function fetchProductsById(id){
    url = `${domain}product/${id}`
    return fetch(url , header)
    .then(function (response) {
        return response.json();
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
      });
}

function fetchEmployee(storeId){
    url = `${domain}employee/`  //todo: per winkel!
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