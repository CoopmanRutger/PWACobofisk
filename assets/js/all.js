// werknemers
function allEmployeeToHtml(employees, isLimited) {
    let result = "";
    for (let index in employees) {

        if (isLimited && index >= 5) {
        } else {
            employees[index].employment = employees[index].function
            result += employeeMaker(employees[index]);
        }
    };
    document.getElementById("employees").innerHTML = result;
}

function employeeMaker({ id, name, employment, username, age, created_at }) {
    return `<tr><th scope="row">${id}</th>
    <td>${name}</td>
    <td>${age}</td>
    <td>${username}</td>
    <td>${employment}</td>
    <td>${created_at}</td>
</tr>`
}


// products
function allProductToHtml(products, isLimited) {
    let result = "";
    for (let index in products) {

        if (isLimited && index >= 5) {
        } else {
            result += productMaker(products[index], isLimited);
        }
        document.getElementById("products").innerHTML = result;
    }
}

function productMaker({ id, name, amountMin, amountStock, color, merk, price, size }, notExtra) {
    let result = `<tr><th scope="row">${id}</th>
    <td>${size}</td>
    <td>${name}</td>
    <td>${merk}</td>
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