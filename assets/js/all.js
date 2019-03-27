// werknemers
function AllEmployeeToHtml(employees, isLimited) {
    let result = "";
    for (let index in employees) {

        if (isLimited && index >= 5) {
        } else {
            result += EmployeeMaker(employees[index], isLimited);
        }
    };
    document.getElementById("employees").innerHTML = result;
}

function EmployeeMaker({ id, name, duty, username, age, created_at }, notExtra) {
    result = `<tr><th scope="row">${id}</th>
    <td>${name}</td>`

    if (!notExtra) {
        result += `<td>${age}</td>
        <td>${username}</td>`
    }

    result += `<td>${duty}</td>`

    if (!notExtra) {
        result += `<td>${created_at}</td>`
    }

    return result + `</tr>`
}


// products
function AllProductToHtml(products, isLimited) {
    let result = "";
    for (let index in products) {

        if (isLimited && index >= 5) {
        } else {
            result += ProductMaker(products[index], isLimited);
        }

        document.getElementById("products").innerHTML = result;
    }
    if (!isLimited) {
        AllButtons(products);
    }
}

function ProductMaker({ id, name, amountMin, amountStock, color, brand, price, size }, notExtra) {
    let result = `<tr><th scope="row">${id}</th>
    <td>${size}</td>
    <td>${name}</td>
    <td>${brand}</td>
    <td>${color}</td>
    <td>€${price}</td>`
    if (!notExtra) {
        result += `<td>${amountMin}</td>`
    }
    result += `<td>${amountStock}</td>
    `
    if (!notExtra) {
        result += `<td>${amountStock - amountMin}</td>
        <td><button id="myBtn${id}" type="button" class="buttons btn btn-outline-danger" data-toggle="modal" data-target="#exampleModal">
        link</button>
        </td>`
    }
    return result + `</tr>`
}


 // Expected products
function AllExpectedProductsToHtml(products, isLimited) {
    let result = "";
    for (let index in products) {

        if (isLimited && index >= 5) {
        } else {
            result += ExpectedProductMaker(products[index], isLimited);
        }
        document.getElementById("expectedProducts").innerHTML = result;
    }
    if (!isLimited) {
        clickedOnButton(products);
    }
}

function ExpectedProductMaker({ id, storeId, status, extra, productId, amount, date, created_at }, notExtra) {
    let result = `<tr><th scope="row">${productId}</th>
    <td>${amount}</td>
    <td>${status}</td>
    <td>${date}</td>`
    
    if (!notExtra) {
        result += `
        <td>${created_at}</td>
        <td>${extra}</td>
        <td><button id="myBtn${productId}" value="${productId}" type="button" class="buttons btn btn-outline-danger" data-toggle="modal" data-target="#exampleModal">
        link</button>
        </td>`
    }
    return result + `</tr>`
}


function ModalJs() {
    let modal = document.getElementById('myModal');
    let span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

function ModalHtml({ id, name, amountMin, amountStock, color, description, brand, picture, price, size }) {

    document.getElementById("modal").innerHTML = `<div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header bg-danger">
        <h5 class="modal-title text-white" id="modal-title">Productid: ${id}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body row">
        <p class="col-4 font-weight-bold">Productnr: <span class="font-weight-normal">${id}</span></p>
        <p class="col-4 font-weight-bold">Size: <span class="font-weight-normal">${size}</span></p>
        <p class="col-3 font-weight-bold">Price: <span class="font-weight-normal">€${price}</span></p>
        <p class="col-4 font-weight-bold">Naam: <span class="font-weight-normal">${name}</span></p>
        <p class="col-4 font-weight-bold">Merk: <span class="font-weight-normal">${brand}</span></p>
        <p class="col-4 font-weight-bold">Kleur: <span class="font-weight-normal">${color}</span></p>
        <p class="col-4 font-weight-bold">Min stock: <span class="font-weight-normal">${amountMin}</span></p>
        <p class="col-4 font-weight-bold">Stock: <span class="font-weight-normal">${amountStock}</span></p>
        <p class="col-4 font-weight-bold">Verschil: <span class="font-weight-normal">${amountStock - amountMin}</span></p>
        <p class="col-12 font-weight-bold">Omschrijving: <span class="font-weight-normal">${description}</span></p>
        <img class="col-12 img-fluid" src="assets/media/${picture}.jpg" alt="product${id}">
        </div>
        <div class="modal-footer ">
        <form action="/product/update" methode="post">
        <label class="font-weight-bold" for="amount">aantal</label>
        <input type="text" name="amount">
        <input class="btn btn-danger" type="submit" value="Add">
        <input class="btn btn-outline-danger" type="submit" value="Del">
        </form>
        </div>
    </div>
    </div>`
}