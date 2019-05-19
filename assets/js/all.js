// werknemers
function AllEmployeeToHtml(employees, isLimited) {
  let result = "";
  for (let index in employees) {
    if (isLimited && index >= 5) {
    } else {
      result += EmployeeRowMaker(employees[index], isLimited);
    }
  }
  document.getElementById("employees").innerHTML = result;
}

// products
function AllProductToHtml(products, isLimited) {
  let result = "";
  for (let index in products) {
    if (isLimited && index >= 5) {
    } else {
      result += ProductRowMaker(products[index], isLimited);
    }
    document.getElementById("products").innerHTML = result;
  }
  if (!isLimited) {
    AllButtons(products);
  }
}

// Expected products
function AllExpectedProductsToHtml(products, isLimited) {
  let result = "";
  for (let index in products) {
    if (isLimited && index >= 5) {
    } else {
      result += ExpectedProductRowMaker(products[index], isLimited);
    }
    document.getElementById("expectedProducts").innerHTML = result;
  }
}


// rowMakers
function EmployeeRowMaker(
  { id, name, duty, username, age, created_at },
  notExtra
) {
  return (result =
    th(id) +
    td(name) +
    NotExtra(notExtra, age) +
    NotExtra(notExtra, username) +
    td(duty) +
    NotExtra(notExtra, created_at) +
    `</tr>`);
}

function ProductRowMaker(
  { id, name, amountMin, amountStock, color, brand, price, size },
  notExtra
) {
  return (
    OutOfStockClass(amountStock, amountMin) +
    th(id) +
    td(size) +
    td(name) +
    td(brand) +
    td(color) +
    td("€" + price) +
    NotExtra(notExtra, amountMin) +
    td(amountStock) +
    NotExtra(notExtra, amountStock - amountMin) +
    // NotExtraButton(notExtra, id) +
    NotExtra(notExtra, button(id)) +
    `</tr>`
  );
}

function ExpectedProductRowMaker({status, extra, productId, amount, date, created_at }, notExtra) {
    return `<tr>`
    + th(productId)
    + td(amount)
    + td(status)
    + td(date)
    + NotExtra(notExtra, created_at)
    + NotExtra(notExtra, extra)
    + `</tr>`
}


// algemeen
function OutOfStockClass(amountStock, amountMin) {
  if (amountStock - amountMin < 0) {
    return `<tr class="outOfStock">`;
  } else {
    return `<tr>`;
  }
}

function NotExtraButton(boolean, text) {
  if (!boolean) {
    return `
        <td>
        </td>`;
  }
  return "";
}

function button(text) {
  return `
    <button
        id="myBtn${text}"
        type="button"
        class="buttons btn btn-outline-danger"
        data-toggle="modal"
        data-target="#exampleModal">
            link
    </button>
`;
}

function NotExtra(boolean, text) {
  if (!boolean) return td(text);
  return "";
}

function td(text) {
  return `<td>${text}</td>`;
}

function th(text) {
  return `<th scope="row">${text}</th>`;
}

function AmountFunction(minStock, stock) {
  if (minStock < stock) {
    return 0;
  }
  return minStock - stock;
}
