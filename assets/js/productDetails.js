
function productsDetails() {
    fetchProducts().then(products => allProductToHtml(products));
}

function allButtons(products) {
    let buttons = document.querySelectorAll(".buttons");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (e) {
            
            modalHtml(products[i]);
            modalJs(i + 1);
            document.getElementById('myModal').style.display = "block";
        });
    }
}

function modalJs() {
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

function modalHtml({ id, name, amountMin, amountStock, color, description, merk, picture, price, size }) {

    document.getElementById("modal").innerHTML = `<div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header ">
        <h5 class="modal-title" id="modal-title">Productid: ${id}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body row">
        <p class="col-3">Productnr: <span>${id}</span></p>
        <p class="col-3">Size: <span>${size}</span></p>
        <p class="col-3">Price: <span>${price}</span></p>
        <p class="col-4">Naam: <span>${name}</span></p>
        <p class="col-4">Merk: <span>${merk}</span></p>
        <p class="col-4">Kleur: <span>${color}</span></p>
        <p class="col-12">Omschrijving: <span>${description}</span></p>
        <p class="col-3">Min stock: <span>${amountMin}</span></p>
        <p class="col-3">Stock: <span>${amountStock}</span></p>
        <p class="col-3">Verschil: <span>${amountStock - amountMin}</span></p>
        <img class="col-12 img-fluid" src="assets/media/${picture}.jpg" alt="product${id}">
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary">Toevoegen</button>
        <button type="button" class="btn btn-outline-danger">verwijderen</button>
        </div>
    </div>
    </div>
<   /div>`
console.log("added modal html");
}