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
    let result = ``;

    if (amountStock - amountMin < 0){
        result += `<tr class="outOfStock">`;
    } else {
        result += `<tr>`;
    }     
    result += `<th scope="row">${id}</th>
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
        // clickedOnButton(products);
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
        <td>${extra}</td>`
    }
    
    return result + `</tr>`
}

function amountFunction(minStock, stock) {
    if(minStock < stock) {
        return 0;
    }
    return minStock - stock;
}


